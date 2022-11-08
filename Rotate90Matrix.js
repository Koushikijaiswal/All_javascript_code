let matrix =[
    [2,3,4],
    [4,5,6],
    [9,6,8],
];
let matrix2 =[
    [ , , ],
    [ , , ],
    [ , , ]
];
let n=matrix.length-1;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        matrix2[j][n]= matrix[i][j];
    }
    n--;
}

for(let i=0;i<matrix2.length;i++){
    let ans = "";
    for(let j=0;j<matrix2[i].length; j++){
        ans = ans + matrix2[i][j]+" ";
    }
    console.log(ans);
}
console.log("-------------------");
// another way of matrix 90 DEGREE ROTATING

let matrix1 = [
    [2,3,4],
    [4,5,6],
    [9,6,8],
];
function matrix90(matrix1){
    let l=matrix1.length;
    for(let i=0;i<l/2;i++){
       for(let j=i; j<l-i-1;j++){
          let temp =matrix1[i][j]; 
          //top wall
          matrix1[i][j]=matrix1[l-j-1][i]; 
          //left wall
          matrix1[l-j-1][i]=matrix1[l-i-1][l-j-1];
          //bottom wall
        matrix1[l-i-1][l-j-1]= matrix1[j][n-i-1];
        //right wall
        matrix1[j][n-i-1]=temp;
       }
    }
}
matrix90(matrix1);
matrix1.forEach(element => console.log(element));


