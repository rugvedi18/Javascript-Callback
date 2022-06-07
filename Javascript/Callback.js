// function passed into another function as an argument, which is then invoked

function greeting(name) {
    console.log('Hello John');
}

function userInput(callback) {
    var name = console.log(' Welcome ');
    callback(name);
}

userInput(greeting);