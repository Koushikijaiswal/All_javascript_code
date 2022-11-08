/*"Calculate the time complexity of Euclid’s Algorithm by subtraction

Euclid’s Algorithm is a method for calculating the greatest common divisor of two integers." */

function Euclids(num1,num2){
    let a=Math.abs(num1);
    let b=Math.abs(num2);
    while(a&&b&&a!==b){
    if(a>b){
        [a,b]=[a-b,b];
    }
    else{
        [a,b]=[a,b-a];
    }
}
    return a||b;
}
console.log(Euclids(4,16));

