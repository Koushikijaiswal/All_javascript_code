 // Bubble sort



 /*
 function bubblesort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;
 }
 console.log(bubblesort(array));
 */

//seletion sort
/*
function seletionsort(array){
    for(let i=0;i<array.length;i++){
        minvalue=array[i];
        minindex=i;
        let j;
        for(j=i;j<array.length;j++){
            if(minvalue>array[j]){
            minvalue=array[j];
            minindex=j;
        }
        }
        let temp=array[i];
        array[i]=array[minindex];
        array[minindex]=temp;
    }
   return array 
}

let array=[2,3,1,4,5];
console.log(seletionsort(array));*/

//insertion sort

function insertionsort(array){
   for(let i=1;i<array.length;i++){
    let j=i-1;
    let key=array[i];
    while(j>=0 && array[j]>key){
        array[j+1]=array[j];
        j--;
    }
    array[j+1]=key;
}
return array;
}
let array=[12,11,13,5,6];
console.log(insertionsort(array));

//second way insertion sort
console.log("++++++++++++++++++++++");
function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let k=i;
        for(let j=k-1;j>=0&&arr[j]>arr[k];j--){
            let temp=arr[k];
            arr[k]=arr[j];
            arr[j]=temp;
            k--;
        }
    }
    return arr;
}
let arr=[2,31,5,6,21];
console.log(insertion(arr));

//merge sort
function mergeSort(arr, l, r) {

    if(l >= r) {
        return;
    }

    let mid = (l+r)/2;
    // left
    mergeSort(arr, l, mid);
    // right
    mergeSort(arr, mid+1, r);
    // merge
    mergeUtil(arr, l, mid, r);

}

function mergeUtil(arr, l, m, r) {
    // create two arrays
    let arr1 = new Array(m-l+1);
    let arr2 = new Array(r-m);
    for(let i=l;i<=m;i++) {
        arr1.push(arr[i]);
    }
    for(let i=m+1;i<=r;i++) {
        arr2.push(arr[i]);
    }
    let i=0,j=0,k=l;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    while(i < arr1.length) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while(j < arr2.length) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

let arr1=[10,4,3,8,6];
console.log(mergeSort(arr1,0,5));

console.log(" ----------");
function add(num1){
    return function(num2){
        return num1+num2;
    }
}
console.log(add(5)(5));
console.log("***************");
//second largst element
function bubblesort(array){
    for(let i=0;i<=2;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array[array.length-2];
 }
 //let array=[2,4,8,1,9,3];
 console.log(bubblesort(array));