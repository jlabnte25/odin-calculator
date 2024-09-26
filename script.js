// Make the function for each operand
function add (array) {
    return array.reduce((total,currentItem)=> total + currentItem, 0);
}

console.log ('add:', add([6,6]));

function subtract (array) {
    return array.reduce((total,currentItem) => total - currentItem);
}

console.log ('subtract:', subtract([7,2]));

function multiply (array) {
    return array.reduce ((total,currentItem) => total * currentItem, 1);
}

console.log ('multiply:', multiply([8,2]));

function divide (array) {
    return array.reduce ((total,currentItem) => total / currentItem);
}

console.log ('divide:', divide([14,7]));

// Declare the required variables
var firstVariable = 0;
var secondVariable = 0;
var result = 0;
var operator = "";
var i = 0;


// Create an initial storage for the user input
var displayValue = [];
console.log ('displayValue:', displayValue);

// Assign the Values to the Variables
function assignValues () {
    if (displayValue.length > 0) {
        if (i===0) {
            firstVariable = parseFloat(displayValue.join('')); 
            displayValue = [];
            console.log ('firstVariable', firstVariable)};
        
        if (i === 1) {
            secondVariable = parseFloat(displayValue.join(''));
            displayValue = [];
            console.log ('secondVariable', secondVariable);
            };
    }    
}

// Create a function that takes the variables and performs the operations
function operate () {

    if (operator === "+") {
        result = add ([firstVariable, secondVariable]);
        firstVariable = result;
        console.log ('firstVariableResult Add', firstVariable);
        secondVariable = 0;
        return firstVariable; 
    }

    if (operator === "-") {
        result = subtract ([firstVariable, secondVariable]);
        firstVariable = result;
        console.log ('firstVariableResult Subtract', firstVariable);
        return firstVariable; 
    }

    if (operator === "*") {
        result = multiply ([firstVariable, secondVariable]);
        firstVariable = result;
        console.log ('firstVariableResult Multiply', firstVariable);
        return firstVariable;
    }

    if (operator === "/") {
        if (i === 0) {
            secondVariable = 1;
        }
        result = divide ([firstVariable, secondVariable]);
        firstVariable = result;
        console.log ('firstVariableResult Divide', firstVariable);
        return firstVariable;
    }

    if (operator === "clear") {
        displayValue = [];
        firstVariable = 0;
        secondVariable = 0;
        result = 0;
        i = 0;
        operator = "";
        display.textContent = 0;
        console.log("Calculator reset.")
    }
}




// Event listeners for the numeric buttons
const btnOne = document.getElementById("1");
    btnOne.addEventListener ("click", () => {
        displayValue.push(1)
        updateDisplay()});
const btnTwo = document.getElementById("2");
    btnTwo.addEventListener ("click", () => {
        displayValue.push(2)
        updateDisplay()});
const btnThree = document.getElementById("3");
    btnThree.addEventListener ("click", () => {
        displayValue.push(3)
        updateDisplay()});
const btnFour = document.getElementById("4");
    btnFour.addEventListener ("click", () => {
        displayValue.push(4)
        updateDisplay()});
const btnFive = document.getElementById("5");
    btnFive.addEventListener ("click", () => {
        displayValue.push(5)
        updateDisplay()});
const btnSix = document.getElementById("6");
    btnSix.addEventListener ("click", () => {
        displayValue.push(6)
        updateDisplay()});    
const btnSeven = document.getElementById("7");
    btnSeven.addEventListener ("click", () => {
        displayValue.push(7)
        updateDisplay()});
const btnEight = document.getElementById("8");
    btnEight.addEventListener ("click", () => {
        displayValue.push(8)
        updateDisplay()});
const btnNine = document.getElementById("9");
    btnNine.addEventListener ("click", () => {
        displayValue.push(9)
        updateDisplay()});
const btnZero = document.getElementById("0");
    btnZero.addEventListener ("click", () => {
        displayValue.push(0)
        updateDisplay()});
const btnDecimal = document.getElementById("decimal");
    btnDecimal.addEventListener ("click", () => {
        displayValue.push('.');
        updateDisplay()});

// Event listeners for the operators
const btnAdd = document.getElementById("+");
    btnAdd.addEventListener ("click", () => {
        updateResultFirst();
        operator = "+";
        assignValues();
        i = 1;
        operate();
        updateDisplayResult();
        changeActiveOperatorColor();
    });

const btnSubtract = document.getElementById("-");
    btnSubtract.addEventListener ("click", () => {
        updateResultFirst();
        operator = "-";
        assignValues();
        i = 1;
        operate();
        updateDisplayResult();
        changeActiveOperatorColor();
    });

const btnDivide = document.getElementById("/");
    btnDivide.addEventListener ("click", () => {
        updateResultFirst();
        operator = "/";
        secondVariable = 1;
        assignValues();
        operate();
        i = 1;
        updateDisplayResult();
        changeActiveOperatorColor();
    });

const btnMultiply = document.getElementById("*");
    btnMultiply.addEventListener ("click", () => {
        updateResultFirst();
        operator = "*";
        secondVariable = 1;
        assignValues ();
        operate ();
        i=1;
        updateDisplayResult();
        if (displayValue.length > 0){
            operate ();
            assignValues();
        }
        changeActiveOperatorColor();
    });

const btnClear = document.getElementById("clear");
    btnClear.addEventListener ("click",() => {
        operator = "clear";
        operate();
        changeActiveOperatorColor();
    });

const btnEqual = document.getElementById("=");
    btnEqual.addEventListener ("click", () => {
        updateResultFirst();
        if (operator === "/" || operator === "*"){
        secondVariable =1;};
        resetOperatorsToDefaultColors();
    })


// Event listeners for the display
const display = document.getElementById("display");

function updateDisplay () {
    //display.textContent = displayValue.join('');
    display.textContent = displayValue.length > 0 ? displayValue.join('') : "0";
}

function updateDisplayResult () {
    display.textContent = firstVariable;
}

function updateResultFirst () {
        assignValues();
        operate();
        i = 1;
        secondVariable = 0;
        updateDisplayResult();
}

const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", deleteLastNumber);

function deleteLastNumber () {
    if (display.textContent = firstVariable) {
        operator = "clear";
        operate();
    }

    displayValue.pop();

    updateDisplay();
}

// Add tracker for active operator
function changeActiveOperatorColor () {
    
    resetOperatorsToDefaultColors ();

if (operator === "+") {
    btnAdd.style.backgroundColor = "#333"}
    else if (operator === "-") {
        btnSubtract.style.backgroundColor = "#333"
    } else if (operator === "*") {
        btnMultiply.style.backgroundColor = "#333"
    } else if (operator === "/") {
        btnDivide.style.backgroundColor = "#333"
    } 
}

function resetOperatorsToDefaultColors () {
    btnAdd.style.backgroundColor = "";      // Default color
    btnSubtract.style.backgroundColor = ""; // Default color
    btnMultiply.style.backgroundColor = ""; // Default color
    btnDivide.style.backgroundColor = "";   // Default color
}
