// let N=888;
// if(N %2 ==0 && N%4==0 && number(N)==1){
//     console.log(N);
// }
// else{
//   console.log("invalid input");
// }

// function number(N){
//              let reversNo =0;
//              let digit;let copy =N;
//             while(copy>0){
//                 digit = copy%10;
//                 reversNo =reversNo*10 + digit;
//                 copy = Math.floor(copy/10);
//             }
//            if(reversNo==N){
//                return 1;
//            }     
//           else{
//               return 0;
//           }
//         }
//number(444);


function number(N){
    if(N %2 ==0 && N%4==0){
    let reversNo =0;
    let digit;let copy =N;
   while(copy>0){
       digit = copy%10;
       reversNo =reversNo*10 + digit;
       copy =Math.floor(copy/10);
   }
    if(reversNo==N){
     console.log(N);
    }     
   else{
    console.log("no output");
}
}
}
number(808);
number(800);
number(444);