// use case - used to handle async operations when callbacks create callback hell (nested callbacks or functions) leads to unmanageable code

// Example 1

let process = new Promise((resolve, reject) => {
    let a = 4;
    if (a == 3) {
        resolve('Success');
    }
    else {
        reject('Failed');
    }
})
process
    .then((message) => {
        console.log(message)
    })
    .catch((message) => {
        console.log(message)
    })


// Example 2

function process(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(a + b);
            reject(a + b);
        }, 1000)
    });
}
process(1, 2)
    .then((value) => {
        console.log("Value is " + value)
    })
    .catch((err) => {
        console.log("Error " + err)
    })

// Example 3

let process = new Promise((resolve, reject) => {
    // resolve("I am resolved");
    reject("I am rejected");
})

process
    .then((message) => {
        console.log("Success - " + message)
    })
    .catch((err) => {
        console.log("Error - " + err)
    })
