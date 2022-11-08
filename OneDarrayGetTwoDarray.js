// one Darray is given we convert into 2D array

let Array =[1,2,3,4,5,6,7,8,9,10];
let lengthofarray = Array.length;
let halflength = lengthofarray/2;

function makeTwoDarray(Array,lengthofarray,halflength){
    let arr1 =[]; let arr2 =[]; 
    for(let i=0;i<halflength;i++){
        arr1.push(Array[i]); 
    }
     console.log(arr1);
    for(let j=halflength ; j<lengthofarray;j++){
        arr2.push(Array[j]);
    } 
    console.log(arr2);
    //return arr1+arr2;
}
(makeTwoDarray(Array,lengthofarray,halflength));