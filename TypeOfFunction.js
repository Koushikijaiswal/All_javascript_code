// normal function

function a1(){
    console.log("hi");
}
a1();

//function expression

let a2= function funexp(){
    console.log("hi");
}
a2();
//funexp(); you got error because you deleare a variable in which you assigned a function with name


//Ananymous function without any name 
let ana=function(){
    console.log("hi");

}
ana();

// imidiate invock function
(function (){
    console.log("hi");
})();


(function (n1,n2){
    return n1+n2;
    //console.log(n1+n2);
})(console.log(1,3));



(function (n1,n2){
    console.log(n1+n2);
})(1,9);


// normal function with parameter

function a3(num1,num2){
    return num1+num2;
}
console.log(a3(5,6));

//arrow function

const sum =(num3,num4)=>{
    return num3+num4;
};
console.log(sum(1,3));