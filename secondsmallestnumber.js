

 
// Second smallest  number

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
let Array=[9,78,94,9,6,87,2];
sorting(Array);
console.log("The second smallest number is "+" "+ Array[1]);
