(function () {

    angular.module("calculator2Module")
        .controller("calculator2Ctrl", function () {

            var calcDisplay = document.querySelector('.display'),
                calcMemory = document.querySelector('.memory'),
                calc = document.querySelector('.calculator'),
                range = document.querySelector('.range'),
                btn = document.querySelectorAll('button');

            calc.addEventListener('click', calcControl, false);
            range.addEventListener('input', adjustSize, false);

            function calcControl(e) {
                if (e.target !== e.currentTarget) {
                    var result = Calculator.keyPressed(e.target.textContent);
                    calcDisplay.textContent = result[0];
                    calcMemory.textContent = result[1];
                }
            }

            //initial height/width ratio: 540/420 = 1.29
            function adjustSize() {
                var height = 540,
                    btnFontSize = 22,
                    displayFontSize = 25,
                    memoryFontSize = 15,
                    multiplier = this.value / 150,
                    newHeight = height * multiplier;

                calc.style.height = newHeight + 'px';
                calc.style.width = newHeight / 1.29 + 'px';
                calcDisplay.style.fontSize = displayFontSize * multiplier + 'px';
                calcMemory.style.fontSize = memoryFontSize * multiplier + 'px';
                for (var i = 0, len = btn.length; i < len; i += 1) {
                    btn[i].style.fontSize = btnFontSize * multiplier + 'px';
                }
            }
        });

})();

