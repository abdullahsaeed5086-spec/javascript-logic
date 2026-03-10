function calculateFactorial(inputNumber) {

    if(inputNumber < 0) {
        throw new Error("inputNumber should be greater than or equal to zero");
    }
    let result = 1;
    for(let i = 1; i <= inputNumber; i++) {

        //result = result * i;
        result *= i
        // 1 * 1 = 1
        // 1 * 2 = 2
        // 2 * 3 = 6
        // 6 * 4 = 24
        
    }

    return result;
}


console.log("3!", calculateFactorial(5));
console.log("3!", calculateFactorial(15));
