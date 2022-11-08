//Array
// let temparr=new arr("element",9);
// for(let i=0;i<temparr.length;i++){
//     console.log(temparr[i]);
// }
const array1=["koushiiki","jaiswal",1];
array1.push("hello");
array1.pop();
for(let i=0;i<array1.length;i++){
    console.log(array1[i]);
}
console.log(array1.at(-2));
//console.log(n);
// push function emplementation add one element 
function arraypush(array){
    let n=array.length;
    array[n]="zero";
    for(let j=0;j<array.length;j++){
        console.log(array[j]);
    }
}
let array =[1,3,5,7,6];
// for(let i=0;i<array.length;i++){
// console.log(array[i]);}
(arraypush(array));
 
// another way to puch function
function pusharr(array, index){
    array[array.length]=index;
    return (array);
}
let arr =[1,2,3];
console.log(pusharr(arr,10));

// implemtation of pop function using function delete one element at the last possition 



array.unshift("kous"); // add element in the first index
console.log(array); //to print whole array

// // implement at() function 

function atarray(array ,index){
    if(index>=0)
    return array[index];
    if(index<0)
    return array[array.length - Math.abs(index)] ;
}

console.log(atarray(array , -1));

let A=[];
console.log(A);
function arraypop(temparray){
//    for(let i=0; i< temparray.length-1;i++)
//      console.log (temparray[i]);
   delete temparray[temparray.length-1];
   return temparray;
}
console.log(arraypop(array));