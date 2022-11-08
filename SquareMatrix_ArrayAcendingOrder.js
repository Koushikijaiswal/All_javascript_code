// magic square matrix

let squarematrix=[
[ 2, 7, 6 ],
[ 9, 5, 1 ],
[ 4, 3, 8 ]];
// let squarematrix =[
//   [1,1,1],
//   [1,1,1],
//   [1,1,1]
// ] ;

function checkSquareMatrix(squarematrix){
  let n= squarematrix.length;
  let Diosum1=0, Diosum2=0;
  for(let i=0;i<n;i++){
     Diosum1 += squarematrix[i][i];
     Diosum2 += squarematrix[i][n-1-i];
  }
  
  if(Diosum1 != Diosum2)
     return false;

  let rowsum =0; colomsum =0;
  for(let i=0;i<n; i++){
       for(let j=0;j<n;j++){
         rowsum += squarematrix[i][j];
         colomsum += squarematrix[j][i];
       }
       if(rowsum != colomsum || rowsum != Diosum1){
          return false;
       }
       return true;
  }

  
}

if(checkSquareMatrix(squarematrix))
  console.log("The given matrix is square matrix");
else
console.log("The given matrix is not square matrix");


// sorting an array in assinding order 

let Array =[2,4,21,11,1,0,1,0,1];
function sortacendingorder(Array){
  for(let j=0;j<Array.length;j++){
  for(let i=0;i<Array.length;i++){
    if(Array[i]>Array[i+1]){
      let temp = Array[i];
      Array[i]=Array[i+1];
      Array[i+1]=temp;
    }
  }
}
  return Array;
}
console.log(sortacendingorder(Array));

