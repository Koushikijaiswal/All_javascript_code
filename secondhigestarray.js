//second maximum number
function secondmaxNumber(Array){
     let temp1;
       //let maxvalue = Array[0];
       for(let j=0;j<Array.length;j++){
       for(let i=0;i<Array.length;i++){
        if(Array[i] >Array[i+1])
        {
            temp1=Array[i];
            Array[i]=Array[i+1];
            Array[i+1]=temp1; 
        }
    }
   }   
   return Array;
       
 }
 let Array1 =[23,43,21,4,511];
 secondmaxNumber(Array1);
// console.log(secondmaxNumber( Array1));
 console.log("the second maximum value is "+" "+secondmaxNumber(Array1[Array1.length-2]));

 
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
