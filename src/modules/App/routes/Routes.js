'use strict';

angular
        .module("App")
        .config(AppConfigRoutes);


AppConfigRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function AppConfigRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(false).hashPrefix('');

    $urlRouterProvider.otherwise('/module-yellow');

    $stateProvider
            .state('page', {
                abstract:true,
                templateUrl: 'modules/App/templates/Page.html'
            })
            .state('page.squirtle', {
                url: "/module-blue",
                templateUrl: 'modules/ModuleBlue/templates/BlueController.html',
                resolve: {
                    mdl: resolveModule('ModuleBlue')
                }
            })
            .state('page.pikachu', {
                url: "/module-yellow",
                templateUrl: 'modules/ModuleYellow/templates/YellowController.html',
                resolve: {
                    moduleb: resolveModule('ModuleYellow')
                }
            })
            .state('page.bulbasaur', {
                url: "/module-green",
                templateUrl: 'modules/ModuleGreen/templates/GreenController.html',
                resolve: {
                    moduleb: resolveModule('ModuleGreen')
                }
            });
}

/**
 * Faz a resolução para o módulo solicitado
 * 
 * @param {type} module
 * @returns {Array}
 */
function resolveModule(module) {
    return [
        '$q', '$ocLazyLoad',
        function ($q, $ocLazyLoad) {
            if (window.__BUNDLED__MODULES__) {
                return $ocLazyLoad.load({
                    name: module,
                    files: ['modules/' + module + '/' + module + '.bundle.min.js']
                });
            } else {
                var deferred = $q.defer();
                setTimeout(function () {
                    $ocLazyLoad.load({
                        name: module
                    });
                    deferred.resolve(true);
                });
                return deferred.promise;
            }
        }
    ];
}