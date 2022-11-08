 // within an array we can multiply with previous element

 let Array = [2,3,4,5,6];
 let n= Array.length;

 function previousmularray(Array,n){
    let arr =[];
    for(let i=0;i<n;i++){
       if(Array[i]==Array[0]){
           arr.push(Array[0]*Array[i+1]);
       }
       else if(Array[i]==Array[n-1]){
            arr.push(Array[n-2]*Array[n-1]);
       }
       else {
           arr.push(Array[i-1]*Array[i+1]);
       }

    }
    return arr;
 }
 console.log(previousmularray(Array,n));

 // another way 

 function modifyArray(a, n1)
{
    // store current value of arr[0] and update it
    let prev = a[0];
    a[0] = a[0] * a[1];
 
    for (let i = 1; i < n - 1; i++)
    {
        // Storing current value 
        let curr = a[i];
 
        // Update current value with product of previos and next elements
        a[i] = prev * a[i+1];
 
        // Update previous value
        prev = curr;
    }
 
    // Updating last element of the array 
    a[n-1] = prev * a[n-1];
    return a;
}
 

let a = [2, 3, 4, 5, 6];
let n1 = a.length;
console.log(modifyArray(a, n1));