
//result
const number =65;
if(number >=90){
    console.log("A");
}
else if(number <90 && number >=80){
    console.log("B");
}
else if(number <80 && number>=70){
    console.log("C");
}
else if(number<70 && number>=60){
    console.log("D");
}
else{
    console.log("fail");
}

// no of lacture attandend to get 75% attandance

let m=7,n=6;
let lacturerequird = Math.ceil(0.75*m);
if(n>=lacturerequird){
    console.log("0 lacture");
}
else{
    console.log(lacturerequird-n);
}

//quardatic quation

// let a=3,b=6,c=3;
// let root = ((b*b)-(4*a*c));

// if(root==0){
//     console.log((-b)/(2*a));
//     console.log((-b)/(2*a));
// }
// else if(root>0){
//     console.log(((-b)+(Math.sqrt(root)))/(2*a));
//     console.log(((-b)-(Math.sqrt(root)))/(2*a));
// }
// else{
//     console.log("no real roots");
// }

//another way

let a=2,b=1,c=3;
let result = ((b*b)-(4*a*c));

if(result===0.0){
    let root=(-b)/(2*a);
    console.log(root,root);
   
}
else if(result>0){
    let root1=((-b)+(Math.sqrt(result)))/(2*a);
    let root2=((-b)-(Math.sqrt(result)))/(2*a);
    console.log(root1,root2);
}
else{
    console.log("no real roots");
}