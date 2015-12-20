(function () {

    angular.module('petStoreApp')
        .controller('cartSummaryCtrl', cartSummaryCtrl);

    function cartSummaryCtrl(cart) {

        var vm = this;

        vm.cartData = cart.getProducts();

        vm.total = function () {
            var total = 0;
            for (var i = 0; i < vm.cartData.length; i++) {
                total += (vm.cartData[i].price * vm.cartData[i].count);
            }
            return total;
        };

        vm.remove = function (name) {
            cart.removeProduct(name);
        };

    }

})();