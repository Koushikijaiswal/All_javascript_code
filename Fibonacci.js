// upto nth term print fibonacci series

let n=7;
let a=0;
let b=1;
console.log(a);
console.log(b);
for(let i=3 ;i<=n;i++){
       let c=a+b;
        console.log(c);
        a=b;
        b=c;
    
}

// print the fibonacci series less then 7
let n1=7;
let a1=0;
let b1=1;
console.log(a1);
console.log(b1);
for(let i=3 ;i<=n1;i++){
       let c1=a1+b1;
       if(c1<7){
        console.log(c1);
       }
        
        a1=b1;
        b1=c1;
    
}

// nth term in the fibonacci series
let n2=8;
let a2=0;
let b2=1;
    if(n2===1){
        console.log(a2);
       }
       else if(n2===2){
           console.log(b2);
       }
// console.log(a2);
// console.log(b2);
let count=3;
for(let i=3 ;i<=n2;i++){
       let c2=a2+b2; 
      if(count===n2){
           console.log(c2);
       }
        a2=b2;
        b2=c2;
        count++;
}

