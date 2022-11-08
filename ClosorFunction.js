// A function is returning any function or with the help of child function we can excess the parent function scope or any variable decleare within the parent function 
// if we excess with the help of child function is called closor property of function

function sum(a,b){
    let c=a+b;
    return function(){
    console.log("a ="+ a);
    console.log("b ="+ b);
    console.log("c ="+ c);
    }
}
let print = sum(3,4); // sum function is returining a child function
print(); 