(function () {

    angular.module('controllersModule', [])
        .controller('mainCtrl', function () {

        })
        .controller('formCtrl', function () {

            /* jshint validthis: true */
            var vm = this;

            vm.newMessage = {};
            vm.subjects = [
                {subject: 'General Inquiries'},
                {subject: 'Business Inquiries'},
                {subject: 'Other'}
            ];
        });

})();
