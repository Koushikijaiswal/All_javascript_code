

function squaresum(num){
     if(0<=num<=10000){
         var a=0;
         while(a*a<num){
             var b=0;
             while(b*b<num){
                 if(a*a + b*b === num){
                     if(a<=b){
                         console.log(a +","+b);
                     }
                 }
                 b +=1;
             }
             a +=1;
         }
     }
}
squaresum(41);

// function squareSum(num) {
//     var a = 0;
//     while (a * a < num) {
//       var b = 0;
//       while (b * b < num) {
//         if (a * a + b * b == num) {
//           if (a <= b) {
//             console.log(a + "," + b);
//           }
//         }
//         b += 1;
//       }
//       a += 1;
  
//     }
//   }
  
  
  
//   squareSum(50);
  