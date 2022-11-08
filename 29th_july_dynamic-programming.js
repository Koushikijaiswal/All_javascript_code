// fibnacci series in dynamic programming one this is not reteated

function fibonaccidp(n ,dp){
    if(n===0 || n===1){
        dp[n]=n;
        return n;
    }
    if(dp[n] !== undefined){
        return dp[n];
    }
    let result= fibonaccidp(n-1,dp)+fibonaccidp(n-2,dp);
    dp[n]=result;
    return result;
}
console.log(fibonaccidp( 6,new Array(7)));
console.log("-----------------------");
//reduces number and when it comes to 0 then return and minimum number of step here
/*
         18         1st
     17        10   2nd
   16  10     9     3rd
 15     9           4th step to redeses the nmber in one number
*/
function reducesnumber(n){
    if(n===0){
        return 1;
    }
    let min= Number.MAX_SAFE_INTEGER;
    let copy =n;
    while(copy!=0){
        let rem =copy%10;
        if(rem !==0){
           min =Math.min(min,reducesnumber(n-rem)+1);
        }
        copy = parseInt(copy/10);
    }
    return min;
}
console.log(reducesnumber(18));
console.log("-----------------------------");
//step to number reduce to 1 
function redusetoone(n){
    if(n===1){
        return 0;
    }
    // let min = Number.MAX_SAFE_INTEGER;
     let val1;
     let val2;
     let val3;
     if(n%2 ===0){
       val1= reducesnumber(n/2);
     }
     if(n%3 ===0){
       val2= reducesnumber(n/3);
     }
     val3 =reducesnumber(n-1);

     if(val1 ===undefined){
        return Math.min(val1,val2);
     } else if(val2===undefined){
        return Math.min(val1,val2)+1;     }
        return;
}
console.log(reducesnumber(10));
console.log("---------------------------------");
// no of notes requerd

function notereqried(notes ,amount){

    if(amount ===0){
        return 0;
    }
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<notes.length;i++){
        if(amount - notes[i]>=0){
            min = Math.min(min, notereqried(notes,amount - notes[i]))
        }

    }
    return min+1 ;
}
console.log(notereqried([100,200,500],600));

// hw [1,2,1] => 1+1=2 or 2 =2
