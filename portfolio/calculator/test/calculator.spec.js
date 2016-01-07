(function () {

    angular.module("calculatorModule", [{
        files: [
            "portfolio/calculator/js/calculatorController.js",
            "portfolio/calculator/js/calculatorService.js"
        ]
    }]);

    describe('calculator', function () {

        it('testing', function () {
            expect(true).toEqual(true);
        });

    });

})();