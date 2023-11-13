const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");
const signBtn = document.querySelector("#sign");
const percentageBtn = document.querySelector("#percent");
const equalBtn = document.querySelector("#equal");
const operators = ["+", "-", "*", "/"];
let numberString = "";
let equation = "";
let result = null;
let operator = "";

// Check to see when a nuber has been clicked
document.addEventListener("click", (e) => {
  if (!e.target.matches(".num")) return;
  // If the number string is empty, starts a new number and removes the display text
  if (numberString === "") {
    display.innerText = "";
  }
  // Clears the calculation if the result is not null
  if (result != null) {
    clear();
  }

  // Retrieves the button value and adds it to the display and number string
  const value = e.target.innerText;
  if (value === ".") {
    checkDecimal();
    return;
  }
  display.innerText += value;
  numberString = display.innerText;
});

// Check to when an operator has been clicked
document.addEventListener("click", (e) => {
  if (!e.target.matches(".operator")) return;

  // If the result is not equal to null, add result to the equation
  // else add the number string
  if (result != null) {
    equation = result.toString();
    display.innerText = equation;
    result = null;
  } else {
    equation += numberString;
  }

  // Retrieve operator
  operator = e.target.innerText;
  if (operator === "x") {
    operator = "*";
  }
  if (operator === "÷") {
    operator = "/";
  }
  numberString = "";
  checkOperator();
});

// Listener for the percentage(%) button
percentageBtn.addEventListener("click", () => {
  const convertDisplay = parseFloat(display.innerText);
  const percentage = convertDisplay / 100;
  display.innerText = percentage.toString();
  numberString = display.innerText;
  if (result !== null) {
    equation = "";
    result = null;
  }
});

// Listener for addition(+) and subtraction(+) buttons
signBtn.addEventListener("click", () => {
  const convertDisplay = parseFloat(display.innerText);
  if (result !== null) {
    equation = "";
    if (convertDisplay > 0) {
      display.innerText = "-" + result.toString();
      numberString = display.innerText;
    } else if (convertDisplay < 0) {
      const string = result.toString();
      const negativeSign = display.innerText.substr(string[0], 1);
      display.innerText = string.replace(negativeSign, "");
      numberString = display.innerText;
    }
    result = null;
    return;
  }
  if (convertDisplay > 0) {
    display.innerText = "-" + display.innerText;
    numberString = display.innerText;
  } else if (convertDisplay < 0) {
    const negativeSign = display.innerText.substr(display.innerText[0], 1);
    display.innerText = display.innerText.replace(negativeSign, "");
    numberString = display.innerText;
  }
});

// Listener for the clear(C) button
clearBtn.addEventListener("click", clear);

// Listener for the equals(=) button
equalBtn.addEventListener("click", () => {
  equation += numberString;
  result = eval(equation);
  display.innerText = result;
});

// Allows one decimal point at a time
function checkDecimal() {
  const lastChar = numberString.charAt(numberString.length - 1);
  if (lastChar === ".") return;
  else {
    numberString += ".";
    display.innerText = numberString;
  }
}

// Allows one operator at a time
function checkOperator() {
  const lastChar = equation.charAt(equation.length - 1);
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === lastChar) {
      const remove = equation.substr(equation.length - 1, 1);
      equation = equation.replace(remove, operator);
      return;
    }
  }
  equation += operator;
}

// Clears calculator display
function clear() {
  display.innerHTML = "";
  numberString = "";
  equation = "";
  result = null;
}
