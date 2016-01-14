(function () {

    angular.module('myApp.controllers')
        .controller('formCtrl', formCtrl);

    function formCtrl($http) {

        /* jshint validthis: true */
        var vm = this;

        vm.subjects = [
            {subject: 'General Inquiries'},
            {subject: 'Business Inquiries'},
            {subject: 'Other'}
        ];

        vm.formData = {};

        vm.submission = false;

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
                url: 'process.php',
                data: param(vm.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .then(function (data) {
                    if (!data.success) {
                        vm.submissionMessage = data.messageError;
                        vm.submission = true;
                    } else {
                        vm.submissionMessage = data.messageSuccess;
                        vm.formData = {};
                        vm.submission = true;
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        }

    }

})();