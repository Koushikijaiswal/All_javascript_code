//stack overflow
function a(){
    a();
    console.log(a);
}
//a();
console.log("--------------------------");

// another one

function a(n){
    if(n===0)
       return ;
   // console.log(n);
   // return n;
    a(n-1);
   // return n;
   console.log(n);
  // return n;
}
console.log(a(5));
console.log("--------------------------------------");
//print reverse no.
function Number(n){
    if(n===0)
        return;
    //console.log(Number(n-1),n);
    console.log(n);
    Number(n-1);
    //console.log(n);
}
Number(10);
console.log("----------------------------------");

//factorial of number

function factorial(n){
    if(n===0){
        return 1;
    }
    let fact = n*factorial(n-1);
    return fact;
}
console.log(factorial(5));
console.log("-------------------");

// fabonacci series nth term

function fibo(n)
{
    if(n===0 || n===1){
        return n;
    }
   return fibo(n-1)+fibo(n-2);
   
}
console.log(fibo(6));
console.log("------------------");
//fabonacci series upto nth term
function fibonacci(n)
{
    if(n===0 || n===1){
        return n;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
let n=7;
if(n<=0){
        console.log("please enter possitive number");
    }
    else{
    for(let i=0;i<=n;i++){
      
       console.log(fibonacci(i));
    }
}

//2nd method upto nth term the fabonacci
console.log("+++++++++++++++++++++++");
function fibona(n , result){
    if(n==0 || n==1){
        result[n]=n
        return n;
    }
    let value = fibona(n-1,result)+fibona(n-2,result);
    result[n]=value;
    return value;
}
let result =[];
(fibona(6,result));console.log(result);
console.log("----------------------------");
//print the increase number
function increasenumber(n){
    if(n===0)
      return ;
    
    increasenumber(n-1);
    console.log(n);
}
increasenumber(10);
console.log("----------------------------");

// array is sorted or not

function issorted(arr,i){
    if(i=== arr.length-1){
        return true;
    }
    let sorted =arr[i]<arr[i+1];
      return sorted && issorted(arr,i+1); 
}
console.log(issorted([2,3,4,5,67],0));
console.log("----------------------------");
//friend go to party
function friendpair(n){
    if(n===1 || n===2){
        return n;
    }
    return friendpair(n-1)+ (n-1)*friendpair(n-2);
}
console.log(friendpair(4));

//adding array element using tail resursion
function addingarray(arr,size,sum=0){
    
    if(size===0) return sum ;
     
     return addingarray(arr,size-1,sum+arr[size-1]);
}
let arr=[1,2,3,4,5,6,7,8,9,10];
let n1=arr.length;
console.log(addingarray(arr,n1));