(function () {

    angular.module('shoppingCart')
        .directive('shoppingCartSummary', shoppingCartSummary)

    function shoppingCartSummary(shoppingCart) {

        return {
            restrict: 'AE',
            templateUrl: 'portfolio/petstore/views/shoppingCart/shoppingCartSummary.html',
            controller: function () {

                var vm = this;

                var cartData = shoppingCart.getProductsFromCart();

                vm.total = function () {
                    return cartData.reduce(function (total, item) {
                        return total + (item.price * item.count);
                    }, 0);
                }

                vm.itemCount = function () {
                    return cartData.reduce(function (total, item) {
                        return total + item.count;
                    }, 0);
                }

            },
            controllerAs: 'summary'
        };

    }

})();