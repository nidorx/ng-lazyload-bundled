
angular.module('App')
        .directive('pokeNav', PokeNavDirective);


PokeNavDirective.$inject = ['pokedex'];

function PokeNavDirective(pokedex) {
    return {
        restrict: 'E',
        templateUrl: 'modules/App/templates/PokeNavDirective.html',
        scope: {
            pokemons: '='
        },
        link: function ($scope) {
            $scope.pokemonA = pokedex.getInfo($scope.pokemons[0]);
            $scope.pokemonB = pokedex.getInfo($scope.pokemons[1]);
        }
    };
}