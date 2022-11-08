let matrix =[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
];

function wavematrix(matrix){
   let isforward=true;let n=matrix.length;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
        if(isforward){
            console.log((matrix[j][i])); 
           // isforward=false;
        }
        else {
            console.log(matrix[n-j-1][i]);
           // isforward =true;
        }
       // isforward = !isforward;
        }
       
    }
}
wavematrix(matrix);