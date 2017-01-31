
angular.module('ModuleBlue')
        .controller('BlueController', BlueController);


BlueController.$inject = ['$scope','pokedex'];

function BlueController($scope, pokedex) {
    $scope.pokemon = pokedex.getInfo('squirtle');
}