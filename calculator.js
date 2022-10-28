let calculated = false;

function getCalculate(btn) {
    let variable = btn.value;
    if(btn.value == "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
        calculated = true;
    } else if (btn.value == "C") {
        document.calculator.display.value = "";
        calculated = false;
    } else {
    if (btn.value == "×") {
        variable = "*";
        calculated = false;
    } else if (btn.value == "÷") {
        variable = "/";
        calculated = false;
    } else {
        if(calculated) {
            document.calculator.display.value = "";
        }
        calculated = false;
    }
    document.calculator.display.value += variable;
    }
}