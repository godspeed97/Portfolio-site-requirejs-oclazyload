(function () {

    angular.module('petStoreAdmin')
        .constant('authUrl', 'http://localhost:5500/users/login')
        .constant('ordersUrl', 'http://localhost:5500/orders')
        .controller('authCtrl', function ($http, $location, authUrl) {

            var vm = this;

            vm.authenticate = function (user, pass) {
                $http.post(authUrl, {
                    username: user,
                    password: pass
                }, {
                        withCredentials: true
                    }).success(function (data) {
                        $location.path('/main');
                    }).error(function (error) {
                        vm.authenticationError = error;
                    });
            }

        })
        .controller('mainCtrl', function () {

            var vm = this;

            vm.screens = ['Products', 'Orders'];
            vm.current = vm.screens[0];

            vm.setScreen = function (index) {
                vm.current = vm.screens[index];
            }

            vm.getScreen = function () {
                return vm.current === 'Products' ? '/views/adminProducts.html' : '/views/adminOrders.html';
            }

        })
        .controller('ordersCtrl', function ($http, ordersUrl) {
            
            var vm = this;

            $http.get(ordersUrl, { withCredentials: true })
                .success(function (data) {
                    vm.orders = data;
                })
                .error(function (error) {
                    vm.error = error;
                });

            vm.selectedOrder;

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

        });

})();