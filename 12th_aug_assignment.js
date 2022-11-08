/*
Convert an array into another array where each element 
will be replaced with the number of elements that are
 smaller on the right side of the array to the element

 [3,12,11,31,2,1] => [2,3,2,2,1,0]
*/

let array=[3,12,11,31,2,1];

function newarray(array){
   let arr=[];
    for(let i=0;i<array.length;i++){
     let count=0; 
        for(let j=i+1;j<array.length;j++){
             if(array[i]>array[j]){
                count++;
             }
        }
        arr.push(count);
    }
    return arr;
}
console.log(newarray(array));

/*
function constructLowerArray(arr, countSmaller, n)
{
let i, j;
for (i = 0; i < n; i++)
countSmaller[i] = 0;
for (i = 0; i < n; i++)
{
for (j = i + 1; j < n; j++)
{
if (arr[j] < arr[i])
countSmaller[i]++;
}
}
}
function printArray(arr, size)
{
let i;
for (i = 0; i < size; i++)
console.log(arr[i]);
}
let arr = [12, 10, 5, 4, 2, 20, 6, 1, 0, 2];
let n = arr.length;
let low = new Array(n);
constructLowerArray(arr, low, n);
printArray(low, n);

//given by assignment solution
*/