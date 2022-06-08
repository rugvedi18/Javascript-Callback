// function passed into another function as an argument, which is then invoked

// use case - handling browser event or responding to an HTTP request

// Example 1

function greeting(name) {
    console.log('Hello John');
}
function userInput(callback) {
    var name = console.log(' Welcome ');
    callback(name);
}

userInput(greeting);

// Example 2

function myDisplayer(result) {
    console.log(result)
}
function myCalculator(a, b) {
    let sum = a + b;
    return result;
}
let result = myCalculator(5, 3);
myDisplayer(result);
