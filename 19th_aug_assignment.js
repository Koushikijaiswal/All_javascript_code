/*
"Given an array. You need to find a triplet that will be having sum as a target. A Triplet is a set of 3 numbers.
Input - [3,6,5,2,10]
Target - 11
Output - [3,6,2]
*/

let array=[3,6,5,2,10];
function triplet(array,target){
    let sum =0; let arr=[];let i,j,k;
    for( i=0;i<array.length;i++){
        for( j=i+1;j<array.length;j++){
            for( k=j+1;k<array.length;k++){
                  sum= sum+array[i]+array[j]+array[k];
                  if(sum===target){
                    arr.push(array[i],array[j],array[k]);
                    return arr;
                  }
                  sum =0;
            }
        }
        
    }
    
   
}
console.log(triplet(array,11));