'use strict';

angular
        .module('ModuleBlue', [])
        .config(ModuleBlueConfig)
        .run(ModuleBlueRun);


function ModuleBlueConfig() {
    console.log('ModuleBlue::config');
}

ModuleBlueRun.$inject = ['$rootScope', '$document', '$state'];

function ModuleBlueRun($rootScope, $document, $state) {
    console.log('ModuleBlue::run');

    $rootScope.$on('$stateChangeSuccess', function () {
        // When changing pages, in this module, scroll to the top of the page
        if ($state.is('page.squirtle')) {
            console.log('page.squirtle - scrollTop');
            $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        }
    });
}