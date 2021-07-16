// IMPORT MODULES under test here:

import { add, sub, mult, div } from '../utils.js'

// using a test library
const test = QUnit.test;

// set up the test - 
// create a few tests with what's expected
// make sure to "call" the function below, in the const actual section
// ----- ADDITION
test('add should take in 2 and 3 and return 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add should take in 6 and -1 and return 5', (expect) => {
    const expected = 5;
    
    const actual = add(6,-1);

    expect.equal(actual, expected);
});

test('add should take in 9 and 9 and return 18', (expect) => {
    const expected = 18;
    
    const actual = add(9,9);

    expect.equal(actual, expected);
});

// ----- SUBTRACTION
test('sub should take in 9 and 9 and return 0', (expect) => {
    const expected = 0;
    
    const actual = sub(9,9);

    expect.equal(actual, expected);
});

test('sub should take in 20 and 10 and return 10', (expect) => {
    const expected = 10;
    
    const actual = sub(20,10);

    expect.equal(actual, expected);
});

test('sub should take in 0 and 10 and return -10', (expect) => {
    const expected = -10;
    
    const actual = sub(0,10);

    expect.equal(actual, expected);
});

// ----- MULTIPLICATION
test('mult should take in 0 and 15 and return 0', (expect) => {
    const expected = 0;
    
    const actual = mult(0,15);

    expect.equal(actual, expected);
});

test('sub should take in 5 and 5 and return 25', (expect) => {
    const expected = 25;
    
    const actual = mult(5,5);

    expect.equal(actual, expected);
});

test('sub should take in 4 and 6 and return 24', (expect) => {
    const expected = 24;
    
    const actual = mult(4,6);

    expect.equal(actual, expected);
});

// ----- DIVISION
test('div should take in 15 and 2 and return 0', (expect) => {
    const expected = 7.5;
    
    const actual = div(15,2);

    expect.equal(actual, expected);
});

test('div should take in 2 and 3 and return .66666667', (expect) => {
    const expected = .6666666666666666;
    
    const actual = div(2,3);

    expect.equal(actual, expected);
});

test('div should take in 123 and 3 and return 41', (expect) => {
    const expected = 41;
    
    const actual = div(123,3);

    expect.equal(actual, expected);
});

