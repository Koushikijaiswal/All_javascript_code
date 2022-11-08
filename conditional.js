//let traficlight ="red";
let traficlight ="green";

if(traficlight === "red")
{
    console.log("stop the car");
}
else
{
    console.log("keep going"); // when condition is false
}

// two condition

let n =7;
let n1=10;

if(n<n1)
{
    console.log("n is lessthen n1");
}
else if(n===n1)
{
    console.log("n is equal to n1");

}
else{
    console.log("n is greater than n1");
}

//nested if

let a=10;
let b=10;

if(a!==b)
{
    console.log("the number are not equal");

    if(a<b)
    {
        console.log("b is greater then a");

    }
    else{
        console.log("a is greater then b");
    }
}

else{
    console.log(" a and b are equal");
}


//switch case

let choise =2;
//let choise =10;
switch(choise){
    case 1:
        console.log("hindi");
        break;
    case 2:
        console.log("english");
        break;
    case 3:
        console.log("bangle");
        break;
    default:
        console.log("invalid choise");

}   

// in switch case we use to taike character as a choise  'a'  in this way 


//fall through if break is missing

let choisee ='b';
switch(choisee){

    case 'a':
        console.log("one");
        break;
    case 'b':
        console.log("two");
    case 'c':
        console.log("three");
    case 'd':
        console.log("four");
        break;
    case 'e':
        console.log("five");
        break;
    default:
        console.log("invalid choise");

}

//ternaryt operator

let a1= 5 , b1=6;
console.log((a1<b1) ? 1:0);

let c = ((a1>b1) ? 1:0 );
console.log(c);

(a1 ===b1) ? console.log("1"):console.log("0");


let x =15 , y=11;
let z = x>y ?(y>x ? 20 :-1):15 ;
console.log(z);