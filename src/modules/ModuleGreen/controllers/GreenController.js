
angular.module('ModuleGreen')
        .controller('GreenController', GreenController);


GreenController.$inject = ['$scope'];

/**
 * 
 * @param {type} $scope
 * @returns {undefined}
 */
function GreenController($scope) {
    $scope.controllerValue = 'ModuleGreen::GreenController';
}