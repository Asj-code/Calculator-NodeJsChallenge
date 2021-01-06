const calculator = require('./calculator.js');

const calculatorSistem = require('./fileManager.js');

let calculatorObj = new calculator();

let calculatorSum = calculatorObj.sumar(2,2);
let calculatorSust = calculatorObj.restar(10,2);
let calculatorMult = calculatorObj.multiplicar(10,2);
let calculatorDiv = calculatorObj.dividir(10,2);

console.log(calculatorSum);
console.log(calculatorSust);
console.log(calculatorMult);
console.log(calculatorDiv);


calculatorSistem(calculatorSum);
calculatorSistem(calculatorSust);
calculatorSistem(calculatorMult);
calculatorSistem(calculatorDiv);











