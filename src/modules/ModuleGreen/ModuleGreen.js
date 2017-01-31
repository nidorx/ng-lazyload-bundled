'use strict';

angular
        .module('ModuleGreen', [])
        .config(ModuleGreenConfig)
        .run(ModuleGreenRun);


function ModuleGreenConfig() {
    console.log('ModuleGreen::config');
}

function ModuleGreenRun() {
    console.log('ModuleGreen::run');
}