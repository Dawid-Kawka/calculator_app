window.onload = function () {
    console.log("app started")
    calculator.init();
};

let calculator = {
    buttons: undefined,
    input: undefined,

    init: function () {
        this.buttons = document.querySelectorAll(".numbers button, .operators button");
        // console.log(this.buttons);
        this.input = document.getElementById("input");

        for (let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i];
            el.addEventListener("click", this.buttonClick);
        }
    },

    buttonClick: function (e) {
        let divHtmlText = e.target.innerHTML;
        console.log("klik :" + divHtmlText);

        switch (divHtmlText) {
            case "=":
                calculator.evaluate();
                break;
        }

        calculator.addToInput(divHtmlText);
    },

    addToInput: function (str) {
        this.input.value += str;
    },

    evaluate: function () {
        let result = Math.evaluate(calculator.input.value);
        calculator.input.value = result;
    }
};