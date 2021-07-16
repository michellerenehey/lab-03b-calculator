// IMPORT FUNCTIONS
import { add, sub, mult, div } from './utils.js'; 

// GRAB DOMS
const addInput1El = document.getElementById ('add-input-1'); 
const addInput2El = document.getElementById ('add-input-2');
const addButtonEl = document.getElementById ('add-button');
const addResultEl = document.getElementById ('add-result');

const subInput1El = document.getElementById ('sub-input-1'); 
const subInput2El = document.getElementById ('sub-input-2');
const subButtonEl = document.getElementById ('sub-button');
const subResultEl = document.getElementById ('sub-result');

const multInput1El = document.getElementById ('mult-input-1'); 
const multInput2El = document.getElementById ('mult-input-2');
const multButtonEl = document.getElementById ('mult-button');
const multResultEl = document.getElementById ('mult-result');

const divInput1El = document.getElementById ('div-input-1'); 
const divInput2El = document.getElementById ('div-input-2');
const divButtonEl = document.getElementById ('div-button');
const divResultEl = document.getElementById ('div-result');


// TEST THE GRABBINGS
console.log(addInput1El, addInput2El, addButtonEl, addResultEl);
console.log(subInput1El, subInput2El, subButtonEl, subResultEl); 
console.log(multInput1El, multInput2El, multButtonEl, multResultEl); 
console.log(divInput1El, divInput2El, divButtonEl, divResultEl); 

// ADD CLICK EVENT TO BUTTON PUSH 
addButtonEl.addEventListener('click', () => {
  // set a variable to hold the user's first input value
  const firstValue = addInput1El.value;
  // set a variable to hold the user's second input value
  const secondValue = addInput2El.value; 
  // run the function, using the variables you just set
  const sum = add(firstValue,secondValue); 
  // this output (sum) should be in the "addResultEl" space of HTML, 
  // so take sum and set it equal to that space (addResultEl), 
  // modified with the text of sum
  addResultEl.textContent = sum; 
}); 

subButtonEl.addEventListener('click', () => {
  const firstValue = subInput1El.value; 
  const secondValue = subInput2El.value;
  const result = sub(firstValue,secondValue); 
  subResultEl.textContent = result;
}); 

multButtonEl.addEventListener('click', () => {
  const firstValue = multInput1El.value;
  const secondValue = multInput2El.value;
  const result = mult(firstValue, secondValue);
  multResultEl.textContent = result;
}); 

divButtonEl.addEventListener('click', () => {
  const firstValue = divInput1El.value; 
  const secondValue = divInput2El.value;
  const result = div(firstValue, secondValue); 
  divResultEl.textContent = result; 
}); 

// addButtonEl.addEventListener('click', () => {
//   const addResult = add(addInput1El.value, addInput2El.value); 
//   addResultEl.textContent = addResult; 
// }); 


// MY IDEAS

// import functions from utils.js

// grab dom elements:
  // use const document.getElementID to input1
  // use const document.getElementID to input1


// add event listener to input1
// add event listener to input2

// on click: 
  // get value of input1 by using .value
  // get value of input2 by using .value
  // run function
  // get the function output using textContent and =


