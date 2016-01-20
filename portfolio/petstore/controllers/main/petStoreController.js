(function () {

    angular.module('petStoreApp')
        .controller('petStoreCtrl', petStoreCtrl);

            function petStoreCtrl($location, $state, shoppingCart, productsSvc) {

                $state.go('root.portfolio.petstore');

                var vm = this;

                vm.data = productsSvc.getProductsData();

                vm.sendOrder = function (shippingDetails) {
                    vm.data.orderId = Math.floor((Math.random() * 2000000) + 1000000);
                    shoppingCart.removeAllFromCart();
                    //shoppingCart.getProductsFromCart().length = 0; ///alternative
                    // var order = angular.copy(shippingDetails);
                    // order.products = shoppingCart.getProductsFromCart();
                    //$http.post(orderUrl, order)
                    //    .then(function (data) {
                    //        vm.data.orderId = data.id;
                    //        cart.getProducts().length = 0;
                    //    })
                    //    .catch(function (error) {
                    //        vm.data.orderError = error;
                    //    })
                    //    .finally(function () {
                    //        //$location.path("/complete");
                    //    });
                }

            }

})();