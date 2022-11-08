// globle scope

let x =19;
function say(){

    console.log("hello");
    console.log(x);
}
say();
console.log("hello");
    console.log(x);

// local scope

function sayhello(){
    let a="kou";
    console.log("hello");
    console.log(a);
}

sayhello();
//console.log(a); //error because the variable is decleare inside the function

/* let a ="ani";  //this "a" is diffrent outside the function body
 console.log(a); */


 //localScopeinside the function

 function say1(){
     {
         let a="aka";
         console.log(a);
     }
     //console.log(a); //error even though I am still inside the function body but I am outside the local scope hence variable in not function
 }
 say1();



 // variable decleare after function call getting error

 function b(){
     {
         //let b="baba";
         console.log(b1);
     }
 }
 let b1 ="babu";
b();
//let b ="babu"; erroe because the variabble decleare after ther function call
