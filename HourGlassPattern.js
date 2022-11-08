//Write a javascript program to print below pattern having numbers in pyramid form along with its mirror image
//  function Hourglasspattern(rows_no){
//  let i,j,k;
//     //let str ='';
//     for(i=1;i<=rows_no;i++){
//         for(k=1;k<i;k++){
//             console.log(" ");
//         }
//         for(j=i;j<=rows_no;j++){
//             console.log(j +" ");
//         }
//             //str =str+j;
//             //console.log(str);
//         //console.log("\n");
        
//     }
//     for(i=rows_no-1;i>=1;i--){
//         for(k=1;k<i;k++){
//             console.log(" ");
//         }
        
//         for(j=i;j<=rows_no;j++)
//          {
//                console.log(j +" ");
//          }
//       // console.log("\n");
        
//     }
//  }
// let rows_no=7;
// Hourglasspattern(rows_no);




// // Second smallest  number

// function sorting(Array){
//     let temp;
//     for(let j=0;j<Array.length;j++){
//     for(let i=0;i<Array.length;i++){
//         if(Array[i]>Array[i+1]){
//             temp=Array[i];
//             Array[i]=Array[i+1];
//             Array[i+1]=temp;
//         }
//     }
//     }
//     return Array;
// }
// let Array=[9,78,94,9,6,87,2];
// sorting(Array);
// console.log("The second smallest number is "+" "+ Array[1]);


let i,j,p;
        for (i=1 ;i<=7;i++){
            p=i; let ans ="";
            let space ="";
            for(j= 1;j<=7;j++){
                if(j>=i && j<=7){
                    ans = ans + p+ " ";
                    p ++; 
                    
                }
                else {
                    space = space+ " ";
                } 
            }
            ans = space +ans;
            console.log(ans);
         }
        for(i=1;i<=6;i++){
            p=7-i;let ans ="";
            let space ="";
            for(j=1;j<=7;j++){
                if(j>=7-i&& j<=7 ){
                   ans = ans + p +" ";
                    p ++;
                }
                else {
                   space = space +" "; 
                }
               
            }
             ans = space +ans;
              console.log(ans);
          
        }
