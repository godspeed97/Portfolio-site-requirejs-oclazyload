(function () {

    angular.module('myApp.controllers')
        .controller('formCtrl', formCtrl);

    function formCtrl($scope, $http) {

        /* jshint validthis: true */
        var vm = this;

        vm.subjects = [
            {subject: 'General Inquiries'},
            {subject: 'Business Inquiries'},
            {subject: 'Other'}
        ];

        vm.formData = {};

        var param = function (data) {
            var returnString = '';
            for (d in data) {
                if (data.hasOwnProperty(d)) {
                    returnString += d + '=' + data[d] + '&';
                }
            }
            return returnString.slice(0, returnString.length - 1);
        }

        vm.formSubmit = function () {
            $http({
                method: 'POST',
                url: 'php/process.php',
                data: param(vm.formData),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .then(function (response) {
                    vm.successMessage = response.data.successMessage;
                    vm.formData = {};
                })
                .catch(function (err) {
                    vm.errorMessage = err;
                    vm.formData = {};
                });
        }

    }

})();