function CheckIfEvenOdd(a){
     const remainder = a % 2;

    if(remainder === 0) {
        return "even"
    }
    else {
        return "odd";
    }

    
}
function checkIfEvenOrOdd2(a){
    return a % 2 === 0 ? "even" : "odd";
}
console.log( "-7 is ",checkIfEvenOrOdd2(-7));
