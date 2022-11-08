// for loop

for(let i=1 ; i<=10 ; i++)
{
    console.log("hello world");
}

let i;
for(i=1;i<=10;i++)
{
    console.log("koushiki");
}

for(let x = 1; x<=10 ;x++)
{
    console.log(x);
}


// while loop 

let p=1;
while(p<=7)
{
    console.log(p);
    console.log(p);
    p++;
}

//do while loop

let q=1;
do {
    console.log("koushiki");
    q++;
}while(q>=7); // here the condition is false but koushiki is priented at least one
 
//print table
function table(N){

    for(let p=1; p<=10;p++){
    //console.log(N + "x" +p + "=" + (N*p));
    console.log(`${N} x ${p} = ${N*p}`);
}
}
table(4);

//square of a number

function square(N){
    for(let i=0 ; i<=N;i++){
        console.log(`square of  ${i} = ${i*i}`);
    }
}
square(10);