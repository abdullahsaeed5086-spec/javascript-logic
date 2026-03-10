


function calculateArea(length,width){
    const area =length * width
    if(length <= 0){
        throw new RangeError("Length should ba a positive number")
    }
    if(width <= 0) {
        throw new RangeError("Width should be a positive number");
    } 
    console.log("Area of a rectangle is ",area);
    
}
// calculateArea(2,3)
// // calculateArea(-200,300)\
// calculateArea(10,10)
// calculateArea(70,-90)