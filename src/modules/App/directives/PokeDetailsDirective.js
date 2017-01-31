
angular.module('App')
        .directive('pokeDetails', PokeDetailsDirective);


PokeDetailsDirective.$inject = ['pokedex'];

function PokeDetailsDirective(pokedex) {
    return {
        restrict: 'E',
        templateUrl: 'modules/App/templates/PokeDetailsDirective.html',
        scope: {
            name: '@'
        },
        link: function ($scope) {
            $scope.$watch('name', function () {
                $scope.pokemon = pokedex.getInfo($scope.name);
            });
        }
    };
}