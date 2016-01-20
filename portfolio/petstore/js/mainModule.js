(function () {

    angular.module('petStoreApp', [])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/catalogue');

            $stateProvider
                .state('root.portfolio.petstore', { //root.portfolio.petstore
                    url: '/catalogue',
                    views: {
                        // relative: 'petstoreContent' (ui-view='petstoreContent') or '' (ui-view)
                        // absolute: 'petstoreContent@root.portfolio' (ui-view='petstoreContent')
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/main/productList.html',
                            controller: 'petStoreCtrl',
                            controllerAs: 'petStore'
                        }
                    }
                })
                .state('root.portfolio.petstore.checkout', {
                    url: '^/petstore/checkout',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/main/checkoutSummary.html'
                        }
                    }
                })
                .state('root.portfolio.petstore.placeorder', {
                    url: '^/petstore/placeorder',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/main/placeOrder.html'
                        }
                    }
                })
                .state('root.portfolio.petstore.complete', {
                    url: '^/petstore/complete',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/main/thankYou.html'
                        }
                    }
                });
        });

})();