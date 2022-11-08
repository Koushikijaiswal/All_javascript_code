let  nums = [2,7,11,15];
let n= nums.length;let i,j;
function calculated_target(nums,n,target){
   let arr = [];
    for( i=0;i<n;i++){
        for( j=i;j<n;j++){
            if(nums[i]+nums[j]==target && i!=j){
               arr.push(i,j);
            }
        }
        if(i==j)
           return -1;
    }
  return arr;
}
console.log(calculated_target(nums,n,18));


console.log("second lasgrst element");
function bubblesort(array,k){
   for(let i=0;i<=k;i++){
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
let array=[2,4,8,1,9,3],k=2;
console.log(bubblesort(array,k));