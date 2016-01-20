(function () {

    angular.module('petStoreAdmin')
        .constant('authUrl', 'http://localhost:5500/users/login')
        .constant('ordersUrl', 'http://localhost:5500/orders')
        .controller('adminAuthCtrl', adminAuthCtrl)
        .controller('adminMainCtrl', adminMainCtrl)
        .controller('adminOrdersCtrl', adminOrdersCtrl);

    function adminAuthCtrl($http, $location, authUrl) {

        var vm = this;

        vm.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredentials: true
            }).then(function (data) {
                $location.path('/main');
            }).catch(function (error) {
                vm.authenticationError = error;
            });
        }

    }

    function adminMainCtrl() {

        var vm = this;

        vm.screens = ['Products', 'Orders'];
        vm.current = vm.screens[0];

        vm.setScreen = function (index) {
            vm.current = vm.screens[index];
        }

        vm.getScreen = function () {
            return vm.current === 'Products' ? '/views/adminProducts.html' : '/views/adminOrders.html';
        }

    }

    function adminOrdersCtrl($http, ordersUrl) {

        var vm = this;

        $http.get(ordersUrl, {withCredentials: true})
            .then(function (data) {
                vm.orders = data;
            })
            .catch(function (error) {
                vm.error = error;
            });

        vm.selectOrder = function (order) {
            vm.selectedOrder = order;
        }

        vm.calcTotal = function (order) {
            var total = 0;
            for (var i = 0; i < order.products.length; i++) {
                total += order.products[i].count * order.products[i].price;
            }
            return total;
        }

    }

})();