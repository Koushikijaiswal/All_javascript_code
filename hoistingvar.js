console.log(a);
//let a=8; //error

var a=8;
console.log(a);

//hoisting functions
console.log(add(4,6));
function add(x,y){
    return x+y;
}

// function expression is not allow hoisting not allow var after the function call

Sub(7,3);
var sub =function (x,y){ //getting error
    console.log( x-y);
}

console.log(sub(7,3));
function sub(x,y){
    return x-y;
}