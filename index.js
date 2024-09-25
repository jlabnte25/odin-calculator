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
        console.log("Calculator reset.")
    }
}


// Event listeners for the buttons
const btnOne = document.getElementById("1");
    btnOne.addEventListener ("click", () => displayValue.push(1));
const btnTwo = document.getElementById("2");
    btnTwo.addEventListener ("click", () => displayValue.push(2));
const btnThree = document.getElementById("3");
    btnThree.addEventListener ("click", () => displayValue.push(3));
const btnFour = document.getElementById("4");
    btnFour.addEventListener ("click", () => displayValue.push(4));
const btnFive = document.getElementById("5");
    btnFive.addEventListener ("click", () => displayValue.push(5));
const btnSix = document.getElementById("6");
    btnSix.addEventListener ("click", () => displayValue.push(6));    
const btnSeven = document.getElementById("7");
    btnSeven.addEventListener ("click", () => displayValue.push(7));
const btnEight = document.getElementById("8");
    btnEight.addEventListener ("click", () => displayValue.push(8));
const btnNine = document.getElementById("9");
    btnNine.addEventListener ("click", () => displayValue.push(9));
const btnZero = document.getElementById("0");
    btnZero.addEventListener ("click", () => displayValue.push(0));
const btnDecimal = document.getElementById("decimal");
    btnDecimal.addEventListener ("click", () => displayValue.push(Number('.')));


const btnAdd = document.getElementById("+");
    btnAdd.addEventListener ("click", () => {
        operator = "+";
        assignValues();
        i = 1;
        operate();
    });

const btnSubtract = document.getElementById("-");
    btnSubtract.addEventListener ("click", () => {
        operator = "-";
        assignValues();
        i = 1;
        operate();
    });

const btnDivide = document.getElementById("/");
    btnDivide.addEventListener ("click", () => {
        operator = "/";
        assignValues();
        i = 1;
    });

const btnMultiply = document.getElementById("*");
    btnMultiply.addEventListener ("click", () => {
        operator = "*";
        assignValues();
        i = 1;
    });

const btnClear = document.getElementById("clear");
    btnClear.addEventListener ("click",() => {
        operator = "clear";
        operate();
        i = 1;
    });

const btnEqual = document.getElementById("=");
    btnEqual.addEventListener ("click", () => {
        assignValues();
        operate();
        i = 1;
        secondVariable = 0;
        console.log ("Result", firstVariable);
    })
