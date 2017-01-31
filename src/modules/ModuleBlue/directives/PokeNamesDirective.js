
angular.module('ModuleBlue')
        .directive('pokeNames', PokeNamesDirective);

PokeNamesDirective.$inject = ['pokeNames'];

function PokeNamesDirective(pokeNames) {
    return {
        restrict: 'E',
        templateUrl: 'modules/ModuleBlue/templates/PokeNamesDirective.html',
        link: function ($scope) {
            $scope.names = pokeNames;
        }
    };
}