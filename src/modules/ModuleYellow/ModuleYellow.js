'use strict';

angular
        .module('ModuleYellow', [])
        .config(ModuleYellowConfig)
        .run(ModuleYellowRun);


function ModuleYellowConfig() {
    console.log('ModuleYellow::config');
}

function ModuleYellowRun() {
    console.log('ModuleYellow::run');
}