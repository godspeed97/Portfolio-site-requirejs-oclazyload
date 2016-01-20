(function () {

    angular.module('petStoreApp')
        .constant('productListActiveClass', 'btn-primary')
        .constant('productListPageCount', 3)
        .controller('productListCtrl', productListCtrl);

    function productListCtrl(productListActiveClass, productListPageCount, shoppingCart) {

        var vm = this;

        var selectedCategory = null;
        
        vm.filteredProducts = 0;
        
        vm.filteredProductsFn = function () {
            return vm.filteredProducts + 1;
        }

        vm.selectedPage = 1;
        vm.pageSize = productListPageCount;

        vm.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            vm.selectedPage = 1;
        };

        vm.selectPage = function (newPage) {
            vm.selectedPage = newPage;
        };

        vm.categoryFilterFn = function (product) {
            return selectedCategory === null || product.category === selectedCategory;
        };

        vm.getCategoryClass = function (category) {
            return selectedCategory === category ? productListActiveClass : '';
        };

        vm.getPageClass = function (page) {
            return vm.selectedPage === page ? productListActiveClass : '';
        };

        vm.addProductToCart = function (product) {
            shoppingCart.addProductToCart(product.name, product.price);
        };

    }

})();