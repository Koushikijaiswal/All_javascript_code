// let n =19 ;
// for ( var i=2;i<=n/2;i++){
//     if(n%i===0){
//         console.log("notprime");
//         break;
//     }
// }
// if(i==(n/2)+1){
//     console.log("prime");
// }

// let n=97;
// let flag=true;
// for(let i=2 ; i<=n/2;i++){
//     if(n%i ===0){
//         flag=false;
//         break;
//     }
// }
// console.log(flag);

// let n=97;
// let flag=true;
// for(let i=2 ; i<=n-1;i++){
//     if(n%i ===0){
//         flag=false;
//         break;
//     }
// }
// console.log(flag);

// using function check prime or not

function prime(n){
let flag=true;
if(n===1){
   // return false;
    console.log("neither prime nor not prime")
}
for(let i=2 ; i<=n-1;i++){
    if(n%i ===0){
        flag=false;        
    }
}
return flag;
}
prime(1);
//console.log(prime(1));
console.log(prime(7));
console.log(prime(9));


//print all prime number

function isprime(n){
   let flag =true;
   if(n===1){
       return false;
   }
   for(let i=2; i<=n-1;i++){
       if(n%i ===0){
           return false;
       }
      
   } 
   return flag;
}

const n=19;
for(let i=2;i<=n;i++){
    if(isprime(i))
    console.log(i);
}

//list tthe prime number

 //let flag=1;
 let i;
for (let n=5 ;n<=12;n++){
    let flag=1;
    for ( i=2; i<=n-1 ;i++){
        if(n%i ==0){
            flag=0;
            break;
        }  
    }
    if(flag===1) {
        console.log(i);
         }
} 
//  for (i=2;i<=12;i++)
//    if (flag===1){
//        console.log(i);
// }
// for (i=2;i<=12;i++){
//     console.log(i);
// }

//find nth prime
console.log("-----------------+++");
function nthprime(num){
    let count=1,value,j=2;
 while(count !==num){
 for(let i=2;i<j;i++){
    if(j%i ==0){
     break;   
  }  
    if(i ==j-1){
        count ++;
        value =j;   
    } 
}
j ++;
 }
    return value;
}
console.log(nthprime(5));