//2-D array
let twoDarray = [
    ["koushiki" ,90, "akuv"],
    ["akash", 80,"sant"],
    ["aniket",89,"dav"],

]

for(let i=0 ; i<twoDarray.length ;i++){
    for (let j=0;j<twoDarray[i].length;j++){
        console.log(twoDarray[i][j]);
    }
    console.log("\n");
}

// write a program in js to print every element of matrix and each element multiply by 5

function matrix(twoDarr1 ,n){
    
    for(let i=0 ;i<twoDarr1.length ;i++){
        for(let j=0; j<twoDarr1[i].length;j++){
             console.log((twoDarr1[i][j])*n);
        }
        console.log("\n");
    }
}

let twoDarr1 =[
    [3,4,5],
    [4,5,6],
    [6,7,8],
];
matrix(twoDarr1 ,5);

// //another way
function matrix1(twoDarr ,n=5){
    
   twoDarr.map((Element , index)=>{
    Element.map((nestedele ,nestedindex)=>{ return ((nestedele[nestedindex])*n);});
   });
            
        }
       
let twoDarr =[
    [3,4,5],
    [4,5,6],
    [6,7,8],
];

console.log(matrix1(twoDarr));

// bomb matrix

let bombmatrix = [
    [0,0,0],
    [0,-1,0],
    [0,-1,0],
]

bombmatrix.map((elemt , index)=> {
    elemt.map((nestedelemt,nestedind)=>{
        if(nestedelemt ==-1){
            console.log(elemt[nestedind +1]+1);
        }
    });
});

// from 
let A ="Relevel";
console.log(Array.from(A));

//console.log(Array.from[13,12,21],(e)=>e+10);

[13,12,42].map((e)=>{console.log(e*10)});

//fill
const FixedArray =Array(5);
console.log(FixedArray);
console.log(FixedArray.fill(100));
console.log(FixedArray.fill(100,2));
console.log(FixedArray.fill("akash",2));
console.log(FixedArray.fill("koushiki",2,3)); //fill(value: any value, starting : value ,end :ending);

// form and fill work in 2D array

let R1 =3;
let C1 =4;
const value = 101;
let twodarray= Array.from(Array(R1 ) ,( ) =>Array(C1).fill(value));
console.log(twodarray);

// transpose an array

// let arr =[
//     [6,823,8],
//     [2,3,4],
//     [7,5,9],
// ];
// console.log(arr);
// function tdarr(arr){
//     let A=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0 ;j<arr[i].length;j++){
//             A.push(arr[j][i]);
        
//             //console.log(A);
//             //console.log(arr[j][i]);
//         }
//     //console.log("\n");
//     }
//     return A;
// }
// console.log(tdarr(arr));
// //console.log(arr);

// // another way step bby step printing
// let arr =[
//     [6,823,8],
//     [2,3,4],
//     [7,5,9],
// ];
// console.log(arr);
// function tdarr(arr){
//     let A=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0 ;j<arr[i].length;j++){
//             A.push(arr[j][i]);
        
//             console.log(A);
//             //console.log(arr[j][i]);
//         }
//     //console.log("\n");
//     }
//     //return A;
// }
// //console.log(tdarr(arr));
// //console.log(arr);
// tdarr(arr);

//anothor way


let arr =[
    [6,823,8],
    [2,3,4],
    [7,5,9],
];
console.log(arr);
function tdarr(arr){
   // let A=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0 ;j<arr[i].length;j++){
           // A.push(arr[j][i]);
        
            //console.log(A);
            console.log(arr[j][i]);
        }
    console.log("\n");
    }
    //return A;
}
tdarr(arr);
//console.log(tdarr(arr));
//console.log(arr);
console.log("--------------");

//another way
function transposeArray(arr){
    let newArr =[];
    for(let i=0;i<arr.length;i++){
        newArr.push([]);
    }
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            newArr[j].push(arr[i][j]);
        };
    };
    return newArr;
}

console.log(transposeArray(arr));
console.log("-----------");

// creating an empty array and push an element here 

let R=4,C=5;
let mat = new Array(R);
let count =0;
for(let i=0;i<R;i++){
    mat[i]= new Array(C);
    for(let j=0;j<C;j++){
        mat[i][j]= count ++;
    }
}
console.log(mat);
console.log("-------------");
//print a matrix in spiral format

let spiralmatrix =[
    [112,12,1],
    [233,44,56],
    [54,56,76],
    [74,87,98],
];

function spiralmatrixprint(spiralmatrix, RowEnd, ColonEnd){
   let RowStart =0; ColonStart=0 ,i=0;
   while(RowStart<RowEnd && ColonStart<ColonEnd){
      for(i=ColonStart;i<ColonEnd;i++){
        console.log(spiralmatrix[RowStart][i] +' ');
      }
      RowStart ++;

      for(i=RowStart;i<RowEnd;i++){
        console.log(spiralmatrix[i][ColonEnd-1] +' ');
      }
      ColonEnd --;
     
      if(RowStart<RowEnd){
      for(i=ColonEnd-1; i>=ColonStart;i--){
        console.log(spiralmatrix[RowEnd-1][i] +' ');
      }
    }
    RowEnd --;

      if(ColonStart<ColonEnd){
        for(i=RowEnd-1;i>=RowStart;i--){
            console.log(spiralmatrix[i][ColonStart] +' ');
        }
        ColonStart ++;
      }
   }
}
spiralmatrixprint(spiralmatrix,4,3);
console.log("---------------------");

// another
function spiralMatrix(matrix) {
    let minr = 0;
    let minc = 0;

    let maxr = matrix.length - 1;
    let maxc = matrix[0].length - 1;

    let noOfElements = matrix.length * matrix[0].length;
    let count = 0
    // left wall
    while(count < noOfElements) {
        for(let i=minr;i<=maxr && count < noOfElements;i++) {
            console.log(matrix[i][minc]);
            count++;
        }
        minc++;

        // bottom wall
        for(let i=minc;i<=maxc && count < noOfElements;i++) {
            console.log(matrix[maxr][i]);
            count++;
        }
        maxr--;

        // right wall
        for(let i=maxr;i>=minr && count < noOfElements;i--) {
            console.log(matrix[i][maxc]);
            count++;
        }
        maxc--;

        // top wall
        for(let i=maxc;i>=minc && count < noOfElements;i--) {
            console.log(matrix[minr][i]);
            count++;        
        }
        minr++;
    }
}
console.log(spiralMatrix([
    [1,2,3,10],
    [4,5,6,11],
    [7,8,13,51],]));

console.log("--------------------");
//another way for spiral matrix print

let A1=[
    [7,8,9],
    [9,8,7],
    [8,9,7],
];
function spiralMat(A1){
    let ar =[];
    while(A1.length){
        ar.push(
            ...A1.shift(),
            ...A1.map((a) => a.pop()),
            ...(A1.pop() || []).reverse(),
            ...A1.map((a)=>a.shift()).reverse()
        );
    }
    console.log(ar);
    return ar;
}
spiralMat(A1);
console.log("-----------");

//matrix addition

console.log("-------------");

// matrix multiplication

let M1 =[
    [1,5,6],
    [6,8,9],
    [7,9,7],
];

let M2 =[
    [2,3,4],
    [3,5,4],
    [7,5,3],
];

function matrixmul(m1,m2,M1,n1,n2,M2){
    let i,j,k;
    let result = new Array(m1);
    for(i=0 ;i<m1;i++){
        result[i] = new Array(n2);
    }

    for(i=0;i<m1;i++){
        for(j=0;j<n2;j++){
            result[i][j]=0;
            for(k=0;k<m2;k++){
                result[i][j] += M1[i][k] * M2[k][j];
            }
        }
    }

    for(i=0;i<m1;i++){
        for(j=0;j<n2;j++){
            console.log(result[i][j] +" ");
        }
        console.log("\n");
    }
}
let m1=3,m2=3,n1=3,n2=3;
matrixmul(m1,m2,M1,n1,n2,M2);

//check the matrix is diagonal matrix or not
console.log("----------");
let M = [
    [1,0,0],
    [0,11,0],
    [0,0,1],
];

function diagonalMatrix( M){
    for(let i=0; i<M.length;i++){
        for (let j=0;j<M[i].length;j++){
            if(i!=j ){
                if( M[i][j] ==0)
                   return true;
                  
            }
           
        }
         return false;
    }
}
console.log(diagonalMatrix(M));

// exploid bom 

function explodeBombs(matrix) {



    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
            // bomb found
            if(matrix[i][j] === -1) {
                //left
                if(j > 0 && matrix[i][j-1] !== -1) {
                    matrix[i][j-1]+=1;
                }
                //right
                if(j < matrix[i].length-1 && matrix[i][j+1] !== -1) {
                    matrix[i][j+1]+=1;
                }

                //top
                if(i > 0 && matrix[i-1][j] !== -1) {
                    matrix[i-1][j]+=1;
                }

                //bottom
                if(i < matrix.length - 1 && matrix[i+1][j] !== -1) {
                    matrix[i+1][j]+=1;
                }
            }
        }
    }
}

// 90 degree rotsted matrix

function rotate90CW(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let newArr = [];
        for(let j = arr.length - 1; j >= 0; j--) {
            newArr.push(arr[j][i])
        }
        result.push(newArr)
    }
    return result;
}

