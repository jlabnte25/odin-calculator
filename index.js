const firstVariable = 0;
const secondVariable = 0;
const operator = "";


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



// function operate (firstVariable, secondVariable, operator) {

//     function 

// }
