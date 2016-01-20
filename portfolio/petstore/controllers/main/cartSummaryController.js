(function () {

    angular.module('petStoreApp')
        .controller('cartSummaryCtrl', cartSummaryCtrl);

    function cartSummaryCtrl(shoppingCart) {

        var vm = this;

        vm.cartData = shoppingCart.getProductsFromCart();
        
        vm.total = function () {
            return vm.cartData.reduce(function (total, item) {
                return total + (item.price * item.count);
            }, 0)
        }

        vm.removeProductFromCart = function (name) {
            shoppingCart.removeProductFromCart(name);
        };
        
        vm.productPlusOne = shoppingCart.productPlusOne;
        
        vm.productMinusOne = shoppingCart.productMinusOne;

    }

})();