
//adding array element using tail resursion
function addingarray(arr,size,sum=0){
    
    if(size===0) return sum ;
     
     return addingarray(arr,size-1,sum+arr[size-1]);
}
let arr=[1,2,3,4,5,6,7,8,9,10];
let n1=arr.length;
console.log(addingarray(arr,n1));