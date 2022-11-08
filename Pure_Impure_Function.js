// pure function is giving everey time same output for same value
let a=2;
function purefun(a){
    return a+2;
}
console.log(purefun(a));
console.log(purefun(a));
console.log(purefun(a));
console.log("-------------");
//impure function it gives every time different value for the same input
var b=2;
function impurefun(c){
     b=b+c;
     return b;
}
console.log(impurefun(2));
console.log(impurefun(2));
console.log(impurefun(2));