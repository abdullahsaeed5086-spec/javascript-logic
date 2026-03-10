function reverseAString(inputString) {
       if(typeof inputString !== 'string') {
        throw new Error("Only strings are allowed");
    }
let result = "";
for(let i =inputString.length -1;  i >= 0 ; i--) { 
result = result + inputString[i];
}
return result;
}
console.log(reverseAString("Abdullah"));
console.log(reverseAString("Software development"));
console.log(reverseAString("12345"));