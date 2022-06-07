async function foo() {
    try {
        let process = await new Promise((resolve, reject) => {
            console.log('In process');
            setTimeout(() => resolve('Done'), 1000)
            // setTimeout(() => reject("Err"), 1000)
        });
        console.log(process);
        return process;
    }
    catch (error) {
        console.log('Error occured');
        return error;
    }

}

foo();
console.log("Status -");