function CalculateSumOfDigits(inputNumber){
    if(inputNumber < 1){
        throw new Error("inputNumber must be a positive number")
    }
    const inputNumberAsString= inputNumber.toString();
    const splittedInputString=inputNumberAsString.split('');
    console.log(splittedInputString);
    let sumOfdigits  =0;
    splittedInputString.forEach(num =>{
       sumOfdigits = sumOfdigits + parseInt(num);
        
    })
    return sumOfdigits;
    
    
}
console.log(CalculateSumOfDigits(12));
console.log(CalculateSumOfDigits(59));

