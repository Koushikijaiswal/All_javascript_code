/*456 number will be printing 
6
5
4
*/

let n=1297;
while(n>0){
    let digit=n%10;
    console.log(digit);   
    n=Math.floor(n/10);
}

//using function
 function digit(n){
    while(n>0){
        let digit=n%10;
        console.log(digit);   
        n=Math.floor(n/10);
    }
    
 }
 digit(3468);
 digit(79879);

 //digit sum of the number 4565= 20
 let n1=125;
 let sum =0;
 while(n1>0){
     
    let  digit1 = n1%10;
    sum +=digit1;
     n1=Math.floor(n1/10);
     
 }
 console.log(sum);
