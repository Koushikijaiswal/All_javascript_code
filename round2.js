function sorting(Array){
    let temp;let count=0;
    for(let j=0;j<Array.length;j++){
    for(let i=0;i<Array.length;i++){
        if(Array[i]>Array[i+1]){
            temp=Array[i];
            Array[i]=Array[i+1];
            Array[i+1]=temp;
            count++;
        }
    }
    }
    return count;
}
//let Array= [1,1,4,2,1,3];
console.log(sorting(Array));


// let s=Array.sort((a,b)=>{
//     return a-b;
// });
// console.log(s);

// console.log("-------------------");

function standingRows(heights){
    let count =0; 
	let expected =heights.sort((a,b)=>{
         
    });
      
  for(let i=0;i<heights.length;i++){
	if(heights[i]!=expected[i]){
		count ++;
	}
}
return count;
}
let heights=[1,1,4,2,1,3];
console.log(standingRows(heights));