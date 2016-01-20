(function () {

    angular.module('shoppingCart')
        .directive('shoppingCartPanel', shoppingCartPanel);

    function shoppingCartPanel(shoppingCart) {
        
        return {
            restrict: 'AE',
            templateUrl: 'portfolio/petstore/views/shoppingCart/shoppingCartPanel.html',
            controller: function () {
               
                var vm = this;
                
                vm.cartData = shoppingCart.getProductsFromCart();
                
                vm.productPlusOne = shoppingCart.productPlusOne;
                
                vm.productMinusOne = shoppingCart.productMinusOne;
                
            },
            controllerAs: 'summaryPanel'
        }
        
    }

})();