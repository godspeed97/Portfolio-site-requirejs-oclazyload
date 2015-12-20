require.config({

    paths: {
        'angular': ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min', 'node_modules/angular/angular.min'],
        'angular-animate': ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-animate.min', 'node_modules/angular-animate/angular-animate.min'],
        'angular-ui-router': ['https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min', 'node_modules/angular-ui-router/build/angular-ui-router.min'],
        'angular-css': ['https://cdnjs.cloudflare.com/ajax/libs/angular-css/1.0.7/angular-css.min', 'node_modules/angular-css/angular-css.min'],
        'angular-strap': ['https://cdnjs.cloudflare.com/ajax/libs/angular-strap/2.3.3/angular-strap.min', 'node_modules/angular-strap/dist/angular-strap.min'],
        'oclazyload': ['node_modules/oclazyload/dist/ocLazyLoad.min'],
        'app': 'js/app',
        'controllersModule': 'js/modules/controllersModule'
    },

    shim: {
        //---//appears to be unnecessary, keep for now
        'angular': {
            exports: 'angular'
        },
        //---//
        'angular-animate': {
            deps: ['angular']
        },
        'angular-css': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'oclazyload': {
            deps: ['angular']
        },
        'controllersModule': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular', 'angular-ui-router', 'angular-animate', 'angular-strap', 'angular-css', 'oclazyload', 'controllersModule']
        }
    }
});

require(
    ['app'], function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });
    });