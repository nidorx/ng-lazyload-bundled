'use strict';

angular
        .module('App', ['ng', 'oc.lazyLoad', 'ui.router'])
        .config(AppConfig)
        .run(AppRun);


function AppConfig() {
    console.log('App::config');
}


function AppRun() {
    console.log('App::run');
}