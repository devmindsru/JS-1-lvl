"use strict";

function add(a, b) {
	return a + b;
}
function reduce(a, b) {
	return a - b;
}
function divide(a, b) {
	return a / b;
}
function multiply(a, b) {
	return a * b;
}

function mathOperation(arg1, arg2, operation){
	switch (operation) {
        case 'add':
           return add(arg1, arg2);
        case 'reduce':
           return reduce(arg1, arg2);
        case 'divide':
           return divide(arg1, arg2);
        case 'multiply':
           return multiply(arg1, arg2);
    }
}



console.log(mathOperation(6, 2, 'add')); 
console.log(mathOperation(6, 2, 'reduce'));
console.log(mathOperation(6, 2, 'divide'));
console.log(mathOperation(6, 2, 'multiply'));

