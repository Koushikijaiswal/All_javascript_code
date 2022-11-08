//and operator && 

let a=4 ,b=5 ,c=7;
console.log((a<b)&& (b===c)); // false beacuse both he condition is rue hen it returns value true only
//or operator
console.log((a<b)|| (b===c)); //true if one condition is true he itreturns he value true
//no operator
console.log(!(a<b));

//largest among three number
const x=8, y=980,z=918;
if(x>y && x>z){
    console.log("largest number is x",x);
}
else if(y>x && y>z){
    console.log("largest number is y",y);
}
else if(z>x && z>y){
    console.log("largest no is z",z);
}
else{
    console.log("three number are equal",x,y,z);
}