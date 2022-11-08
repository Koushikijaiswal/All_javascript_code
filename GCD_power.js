function gcd(m,n){
    let x;
    if(m>=n){
        for(let i=1;i<=n;i++){
            if(m%i==0 && n%i==0)
               x=i;
        }
    }
    else 
     {
        for(let i=1;i<=m;i++){
            if(m%i==0 && n%i==0)
                x=i;
        }
     }
    return x;
}
console.log(gcd(4,16));
console.log("-------------------------");
//power x^y

function power(x,y){
    if(y<0){
        return (1/x*power(x,y+1));
    }
    if(x==0&&y==0){
        return;
    }
    if(y==0){
        return 1;
    }
    return x*power(x,y-1);
}
console.log(power(1,0));