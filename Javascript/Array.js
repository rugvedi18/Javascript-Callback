// let a1 = [1, 2, 3];

// a1 = [1, 'a', () => { console.log('function in an array') }]

// console.log(a1[2]())

let obj = {
    name: 'John',
    age: 21,
    getDetails: function () {
        console.log(this.name + 'is a boy')
    }
}

console.log(obj)
obj.getDetails()