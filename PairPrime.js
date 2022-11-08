// 15 in a number a , b be the prime value add a+b=15 [2,13]

// function prime(n){
    
//     if(n===1){
//         return false;
//     }
//     for (let i=2 ;i<n;i++){
//         if(n%i ===0){
//             return false;
//         }
//     }
//         return true;

// }

// function pairprime(n){
//     if(n%2==0){
//        for(let a=2;a<=n/2;a++){
//         let b = n-a;
//         if(prime(a)&&prime(b)){
//             return [a,b];
//         }
//     }
//     return "no any output"; 
//     }
//     else{
//         console.log("the no. is not even");
//     }
    
// }

// pairprime(15);
// console.log(pairprime(17));
// console.log(pairprime(4));
// console.log(pairprime(18));
// console.log(pairprime(14));

function prime(n){
    
    if(n===1){
        return false;
    }
    for (let i=2 ;i<n;i++){
        if(n%i ===0){
            return false;
        }
    }
        return true;

}

function pairprime(n){
    if(n%2==0){
        let count =0;
       for(let a=2;a<=n/2;a++){
        let b = n-a;
        if(prime(a)&&prime(b)){
            //return [a,b];
            console.log(a,b);
            count ++;
        }
        
    }
    if(n%2==0)
     return count;
    //return "no any output"; 
    }
    else{
        console.log("the no. is not even");
        return 0;
    }
    // if(n%2==0)
    // return count;
    
}

// console.log(pairprime(15));
// console.log(pairprime(17));
// console.log(pairprime(4));
console.log("only"+" "+pairprime(17)+" "+"pair");
console.log("only"+" "+pairprime(15)+" "+"pair");
console.log("only"+" "+pairprime(4)+" "+"pair");
console.log("only"+" "+pairprime(18)+" "+"pair");
console.log("only"+" "+pairprime(14)+" "+"pair");
//console.log(pairprime(14));
// pairprime(17);
// pairprime(4);
// console.log(pairprime(18));
// pairprime(14);