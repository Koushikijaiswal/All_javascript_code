//largest number

function largestnum(num1,num2){
    if(num1===num2){
        console.log("both num is same");
    }
    else if(num1>num2){
        console.log(num1+" "+"num1 is greater than "+num2+" "+"num2");
    }
    else if(num1<num2){
        console.log(num2+" "+"num2 is greater than "+num1+" "+"num1");
    }
    else{
        console.log("both are no comparable");
    }
}
largestnum(9 ,0);
largestnum(9 ,-7);
largestnum(7,9);
largestnum(9,9);
largestnum(9,'you');