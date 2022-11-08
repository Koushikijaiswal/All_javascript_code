let fruits =["banana","orange","apple","graps"];
let sortarr =fruits.sort();
console.log(sortarr);
// let reverseArr1 =sortarr.reverse();
// console.log(reverseArr1);
let reverseArr2 =fruits.reverse();
console.log(reverseArr2);

// //
// function posStart_NegEnd(arr){
//     if(arr.length === 0) return arr;
//     let posPointer = 0;
//     let negPointer = arr.length - 1;
//     while(posPointer !== negPointer){
//         if(arr[posPointer] >= 0) posPointer++;
//         if(arr[negPointer] < 0) negPointer--;
//         if(posPointer >= negPointer) break;
//         if(arr[posPointer] < 0 && arr[negPointer] >= 0){
//             [arr[posPointer], arr[negPointer]] = [arr[negPointer], arr[posPointer]] //swap
//         }
//     }
//     return arr;
//  }

//  //
//  function negAtLast(arr) {
//     const posArr = [];      // for storing +ve element
//     const negArr = [];      // for storing -ve element

//     for(let i = 0; i <= arr.length - 1; i++) {  // for loop for iteration 
//         if(arr[i] > 0) posArr.push(arr[i]);     // if element is +ve than push in posArr
//         else negArr.push(arr[i]);               // if element is -ve than push in negArr
//     }
//     return posArr.concat(negArr);               // join posArr and negArr
// }
// const array = [-5,3,-4,88,-9,-10,21,5,6]
// console.log(negAtLast(array));

// bubble sort 

function sorting(Array){
    let temp;
    for(let j=0;j<Array.length;j++){
    for(let i=0;i<Array.length;i++){
        if(Array[i]>Array[i+1]){
            temp=Array[i];
            Array[i]=Array[i+1];
            Array[i+1]=temp;
        }
    }
    }
    return Array;
}
let Array=[9,78,94,-9,-6,87,2];
console.log(sorting(Array));
console.log("-------------------");
//second value sorted array
// let sortarry =[67,98,7,6,6,-2,4,9];
// let sortarry1 =sortarry.sort();
// uniquesort =new setInterval(sortarry1);
// uniquesort=[...uniquesort];
// console.log(`second ${uniquesort.at[-2]}`);



// pick  value from array which is divisible by 7
function diviarray(temparry){
    for(let i=0;i<temparry.length; i++){
        if(temparry[i]%7 ==0)
           console.log( temparry[i]);
    }
}
let temparry=[56,21,7,11,18];
diviarray(temparry);

//second way 
function diviarray1(temparry1){
    let ans =[];
    for(let i=0;i<temparry1.length; i++){
        if(temparry1[i]%7 ==0)
         ans.push(temparry1[i]);
    }
    return ans;
}
let temparry1=[56,21,7,11,18];
console.log(diviarray1(temparry1));

//3rd way 
function divisiblebyN(arr ,n){
    let array = arr.filter(element=> element%n ===0)
    return array;
}
let arr =[34,56,7,81,14];
let n=7;
console.log(divisiblebyN(arr,n));

// in an array all negative number comes after the positive number

//let Array =[9,8,-8,-7,2,-9,-21,3,1];
let Array2= [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
let n3=Array.length;

function sortarray(Array,n){
    let temp;
    for(let j=0;j<n;j++){
    for(let i=0;i<n;i++){
         if(Array[i]<Array[i+1]){
            temp=Array[i];
            Array[i]=Array[i+1];
            Array[i+1]=temp;
         }
    }
}
  return Array;
}
console.log(sortarray(Array2,n3));

// another way

function rearrange(arr, n) {
    let mid = 0;
    let end = n-1;
    let swap = 0;
    while (mid <= end) {
        if (arr[mid] >= 0) {
        	mid++;
        } else {
        	swap = arr[end];
          arr[end] = arr[mid];
          arr[mid] = swap;
          end--;
        }
    }
    return arr;
}
 
let arr1 = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
let n1 = arr1.length;
console.log(rearrange(arr1, n1));
