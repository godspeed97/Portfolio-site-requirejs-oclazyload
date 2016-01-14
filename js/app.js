(function () {

    angular.module('myApp', [
            'ui.router', //angular ui-router
            'ngAnimate', //for fade in effect on navigation view change
            'oc.lazyLoad', //lazy loading angular components
            'myApp.controllers'
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
                            templateUrl: function ($stateParams) {
                                return 'portfolio/' + $stateParams.id + '/index.html';
                            },
                            resolve: {
                                load: function ($stateParams, $ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        files: [
                                            'portfolio/' + $stateParams.id + '/js/mainModule.js',
                                            'portfolio/' + $stateParams.id + '/css/master.css'
                                        ]
                                    });
                                }
                            }
                        }
                    }
                })
                //.state('root.code', {
                //    url: ':id/code',
                //    views: {
                //        'content@': {
                //            templateUrl: function ($stateParams) {
                //                return 'portfolio/' + $stateParams.id + '/code/index.html';
                //            }
                //        }
                //    }
                //})
                .state('root.docs', {
                    url: ':id/docs',
                    views: {
                        'content@': {
                            templateUrl: function ($stateParams) {
                                return 'portfolio/' + $stateParams.id + '/docs/index.html';
                            },
                            resolve: {
                                load: function ($stateParams, $ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        files: [
                                            'portfolio/' + $stateParams.id + '/docs/master.css'
                                        ]
                                    });
                                }
                            }
                        }
                    }
                });

        });

})();