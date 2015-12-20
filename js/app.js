(function () {

    angular.module('myApp', [
            'ui.router', //angular ui-router
            'ngAnimate', //for fade in effect on navigation view change
            'door3.css', //for route configuration object css property (dynamic loading of stylesheets on view change)
            'mgcrea.ngStrap', //for active nav button state
            'oc.lazyLoad', //lazy loading angular components
            'controllersModule'
        ])
        .config(function ($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('root', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'views/static/header.html'
                        },
                        'nav': {
                            templateUrl: 'views/static/nav.html'
                        },
                        'content': {
                            templateUrl: 'views/portfolio.html'
                        },
                        'footer': {
                            templateUrl: 'views/static/footer.html'
                        }
                    }
                })
                .state('root.home', {
                    url: 'home',
                    views: {
                        'content@': {
                            templateUrl: 'views/portfolio.html'
                        }
                    }
                })
                .state('root.about', {
                    url: 'about',
                    views: {
                        'content@': {
                            templateUrl: 'views/about.html'
                        }
                    }
                })
                .state('root.blog', {
                    url: 'blog',
                    views: {
                        'content@': {
                            templateUrl: '/views/blog.html'
                        }
                    }
                })
                .state('root.contact', {
                    url: 'contact',
                    views: {
                        'content@': {
                            templateUrl: '/views/contact.html',
                            controller: 'formCtrl',
                            controllerAs: 'contactForm'
                        }
                    }
                })
                .state('root.portfolio', {
                    url: ':id',
                    views: {
                        'content@': {
                            //css: function ($stateParams) { //perhaps move to oclazyload below, but css properties must be namespaced correctly
                            //    return 'portfolio/' + $stateParams.id + '/css/master.css';
                            //},
                            templateUrl: function ($stateParams) {
                                return 'portfolio/' + $stateParams.id + '/index.html';
                            },
                            resolve: {
                                load: function ($stateParams, $ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        files: [
                                            'portfolio/' + $stateParams.id + '/js/mainModule.js',
                                            'portfolio/' + $stateParams.id + '/css/master.css'
                                        ] // wait until there's an easy way to namespace css files before loading them here
                                    });
                                }
                            }
                        }
                    }
                });

        });

})();