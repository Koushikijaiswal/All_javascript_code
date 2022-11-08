
// armstrong number

function Armstrong(a){
   let flag =true;
    let num=a;
    let sum =0
    while(a>0){
      let digit = a%10;
      sum  += digit*digit*digit;
      a = Math.floor(a/10); 
    }
   if (num==sum){
       return true;
   }
   else{
       return false;
   }
   } 
console.log(Armstrong(158));

//with out using funcion
let n =153;
let copy =n;
let sum1=0;
while(copy>0){
    let digit1= copy%10;
   sum1 += Math.pow(digit1 ,3);// sum1 += digit1*digit1*digit1;
    copy=Math.floor(copy/10);
}
console.log(sum1===n);