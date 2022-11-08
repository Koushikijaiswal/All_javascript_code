
let matrix1=[
    [1,2,3],
    [4,2,3],
    [5,3,5]
];
let matrix2=[
    [3,4,6],
    [5,4,3],
    [8,7,4],
];
function multiplicationmatrix(matrix1,matrix2,resultmatrix){
    
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
              resultmatrix[i][j]=0;
              for(let k=0;k<N;k++)
                resultmatrix[i][j] +=matrix1[i][k]*matrix2[k][j];
              
    }
}
}
let N=3,I,J;
let resultmatrix=new Array(N);
for(let k=0;k<N;k++)
    resultmatrix[k]= new Array(N);
multiplicationmatrix(matrix1,matrix2,resultmatrix);
for(I=0;I<N;I++){
    for(J=0;J<N;J++){
        console.log(resultmatrix[I][J]+" ");     
    }
    console.log('\n');
}


/*space complixity =O(n^2);
time complixity=O(n^3);*/