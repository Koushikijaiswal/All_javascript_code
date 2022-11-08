function div(N){
    if(N%2 ===0)
        console.log("divisible by 2");
    
    else
        console.log("not divisible by 2");

}
div(8);
div(11);

// function letsFizzBuzz(n){
	
//     for(let i=1;i<=n;i++){

// 	if(i%5==0 && i%3==0){
// 		console.log("FizzBuzz");
// 	}
//     else if(i%5==0){
// 		console.log("Buzz");
// 	}
// 	else if(i%3==0){
// 		console.log("Fizz")
// 	}
// 	else
// 	   console.log(i);
//     // let output = "";
//     // console.log(output);
	
// }
// }
// letsFizzBuzz(100);
// let n = parseInt(readline());
// let  readline = require('readline').createInterface({input:process.stdin,output:process.stdout});
	
function letsFizzBuzz(n){
	
    for(let i=1;i<=n;i++){

	if(i%5==0 && i%3==0){
		console.log("FizzBuzz");
	}
    else if(i%5==0){
		console.log("Buzz");
	}
	else if(i%3==0){
		console.log("Fizz")
	}
	else
	   console.log(i);
    // let output = "";
    // console.log(output);
}
}
letsFizzBuzz(10);
    // let output = "";
    // console.log(output);
