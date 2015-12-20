(function () {

    angular.module('petStoreApp', [{
            files: [
                'portfolio/petstore/controllers/checkoutControllers.js',
                'portfolio/petstore/controllers/productListControllers.js',
                'portfolio/petstore/controllers/sportsStore.js',
                'portfolio/petstore/components/cart/cart.js',
                'portfolio/petstore/filters/customFilters.js'
            ]
        }])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('root.portfolio.petstore', { //root.portfolio.petstore
                    url: '/',
                    views: {
                        // relative: 'petstoreContent' (ui-view='petstoreContent') or '' (ui-view)
                        // absolute: 'petstoreContent@root.portfolio' (ui-view='petstoreContent')
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/productList.html',
                            controller: 'petStoreCtrl',
                            controllerAs: 'petStore'
                        }
                    }
                })
                .state('root.portfolio.petstore.checkout', {
                    url: 'checkout',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/checkoutSummary.html'
                        }
                    }
                })
                .state('root.portfolio.petstore.placeorder', {
                    url: 'placeorder',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/placeOrder.html'
                        }
                    }
                })
                .state('root.portfolio.petstore.complete', {
                    url: 'complete',
                    views: {
                        'petstoreContent@root.portfolio': {
                            templateUrl: '/portfolio/petstore/views/thankYou.html'
                        }
                    }
                });
        });

})();