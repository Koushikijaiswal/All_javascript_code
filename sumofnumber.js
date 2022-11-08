// sum of the number less than 10
let sum = 0;
for( let i =0 ; i<10 ; i++)
{ 
    sum = sum +i;

}
console.log(sum);

// sum of the even number less than 10

let sum1= 0;
for(let j =0 ; j<10 ;j +=2)
{
    sum1 +=j;
}
console.log(sum1);

// another way sum of the even number 
let sum2 =0;
for (let k =0 ; k<10 ; k++)
{
    if(k% 2 ==0){
        sum2 =sum2+k;
    }

}
console.log(sum2);

// sum of the even number less than 10 using whil loop

let sum3 =0 , p=0;
while(p<10)
{
    if(p%2 == 0){
        sum3 = sum3+p;
       // console.log(sum3);
    }
    p++;
}
console.log(sum3);
