require.config({

    paths: {
        "angular": ["https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min", "js/libs/angular/angular.min"],
        "angular-animate": ["https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-animate.min", "js/libs/angular-animate/angular-animate.min"],
        "angular-ui-router": ["https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min", "js/libs/angular-ui-router/build/angular-ui-router.min"],
        "angular-css": ["https://cdnjs.cloudflare.com/ajax/libs/angular-css/1.0.7/angular-css.min", "js/libs/angular-css/angular-css.min"],
        "angular-strap": ["https://cdnjs.cloudflare.com/ajax/libs/angular-strap/2.3.3/angular-strap.min", "js/libs/angular-strap/dist/angular-strap.min"],
        "oclazyload": ["js/libs/oclazyload/dist/ocLazyLoad.min"],
        "app": "js/assets/app",
        "app-controllers": "js/controllers/formCtrl"
    },

    shim: {
        //---//appears to be unnecessary, keep for now
        "angular": {
            exports: "angular"
        },
        //---//
        "angular-animate": {
            deps: ["angular"]
        },
        "angular-css": {
            deps: ["angular"]
        },
        "angular-strap": {
            deps: ["angular"]
        },
        "angular-ui-router": {
            deps: ["angular"]
        },
        "oclazyload": {
            deps: ["angular"]
        },
        "app": {
            deps: ["angular", "angular-ui-router", "angular-animate", "angular-strap", "angular-css", "oclazyload", "app-controllers"]
        }
    }
});

require(
    ["app"], function () {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ["myApp"]);
    });
});