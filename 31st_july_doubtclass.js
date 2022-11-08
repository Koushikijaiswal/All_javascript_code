/* 
[48]
[20,28]
[8,12,16]
[3,5,7,9]
[1,2,3,4,5]
*/ 

function printPattern(arr,matrix,i){
    if(arr.length===0){
        return;
    }
    
    let temp=[];
    for(let i=0;i<arr.length-1;i++){
        temp.push(arr[i]+arr[i+1]);
    }
    printPattern(temp,matrix,i+1);
    matrix.push(arr);
}
let matrix=[];
printPattern([1,2,3,4,5],matrix,0);
matrix.forEach((everyelement) => console.log(everyelement));

//merge two array in sorted order
//[1,3,5,7] [2,4,6,8] = [1,2,3,4,5,6,7,8]

function merge(arr1,arr2,i,j,temparry){

    if(i===arr1.length && j===arr2.length){
        return;
    }

    if(arr1[i]<=arr2[j]){
        temparry.push(arr1[i]);
        i++;
    }
    else{
        temparry.push(arr2[j]);
      j++;
    }
    merge(arr1,arr2,i,j,temparry);
}

let arr1=[2,4,6,8];
let arr2=[1,3,5,7,9];
let temparry=[];
merge(arr1,arr2,0,0,temparry);
temparry.forEach((element)=>console.log(element));