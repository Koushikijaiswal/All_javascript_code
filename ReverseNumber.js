//6755 -----> 5576 reverse of any number


function reverse(n){
    let rs =0;
    while(n>0){
        let digit = n%10;
        rs = (rs *10 )+digit;
        n= Math.floor(n/10);
    }
    return rs;
}
console.log(reverse(6754));