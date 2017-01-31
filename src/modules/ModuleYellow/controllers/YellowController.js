
angular.module('ModuleYellow')
        .controller('YellowController', YellowController);


YellowController.$inject = ['$scope'];

/**
 * 
 * @param {type} $scope
 * @returns {undefined}
 */
function YellowController($scope) {
    $scope.controllerValue = 'ModuleYellow::YellowController';
}