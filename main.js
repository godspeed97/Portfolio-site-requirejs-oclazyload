require.config({

    paths: {
        'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min', 'node_modules/jquery/dist/jquery.min'],
        'bootstrapjs': ['https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap'],
        'angular': ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min', 'node_modules/angular/angular.min'],
        'angular-animate': ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-animate.min', 'node_modules/angular-animate/angular-animate.min'],
        'angular-ui-router': ['https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min', 'node_modules/angular-ui-router/build/angular-ui-router.min'],
        'oclazyload': ['node_modules/oclazyload/dist/ocLazyLoad.min'],
        'controllersModule': 'js/modules/controllersModule',
        'contactFormController': 'js/controllers/contactFormController',
        'app': 'js/assets/app'
    },

    shim: {
        //---//appears to be unnecessary, keep for now
        'angular': {
            exports: 'angular'
        },
        //---//
        'bootstrapjs': {
            deps: ['jquery']
        },
        'angular-animate': {
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
        'contactFormController': {
            deps: ['angular', 'controllersModule']
        },
        'app': {
            deps: ['jquery', 'bootstrapjs', 'angular', 'angular-animate', 'angular-ui-router', 'oclazyload', 'controllersModule', 'contactFormController']
        }
    }
});

require(
    ['app'], function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });
    });