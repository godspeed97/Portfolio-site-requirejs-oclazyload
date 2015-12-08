(function () {

    angular.module("calculatorModule")
        .controller("calculatorCtrl", function (calculatorSvc) {

            /* jshint validthis: true */
            var vm = this;

            vm.calcControl = function (key) {
                var result = calculatorSvc.keyPressed(key);
                vm.display = result[0];
                vm.memory = result[1];
            }

        });

})();