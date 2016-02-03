(function () {

    angular.module('shoppingCart', [])
        .factory('shoppingCart', shoppingCart);

    function shoppingCart() {

        var cartData = [];
        
        function getProductsFromCart() {
            return cartData;
        }

        function addProductToCart(name, price) {
            var addedToExistingItem = false;
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].name === name) {
                    cartData[i].count++;
                    addedToExistingItem = true;
                    break;
                }
            }
            if (!addedToExistingItem) {
                cartData.push({
                    count: 1, price: price, name: name
                });
            }
        }
        
        function removeProductFromCart(name) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].name === name) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        }
        
        function removeAllFromCart() {
            cartData.length = 0;
        }

        function productPlusOne(name) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].name === name) {
                    cartData[i].count++;
                    break;
                }
            }
        }

        function productMinusOne(name) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].name === name) {
                    cartData[i].count--;
                    if (cartData[i].count === 0) {
                        cartData.splice(i, 1);
                    }
                    break;
                }
            }
        }

        return {
            getProductsFromCart: getProductsFromCart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
            removeAllFromCart: removeAllFromCart,
            productPlusOne: productPlusOne,
            productMinusOne: productMinusOne
        };

    }

})();