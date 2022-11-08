//with return type statement

function kou(x,y){
    return x%y ;
}
console.log(kou(7,3));

//function without return type

function ani(x,y){
    console.log(x%y);
}
ani(7,3);

console.log(kou(7,3)+kou(7,3));
console.log(ani(7,3)+ani(7,3));// NaN value return beacuse in ani() there is no any returnm type

let A = [];
console.log(A);
