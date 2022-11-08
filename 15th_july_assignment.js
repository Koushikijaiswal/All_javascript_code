/*1. Write a program to multiply the value in the given array and return a result (use array functions)
Array = [2,3,4,5,6,7,8]
*/
let Array=[2,3,4,5,6,7,8];
function multipleArray(Array,n){
    let mulArray=[];
    for(let i=0;i<Array.length;i++){
      mulArray.push(Array[i]*n);
    }
    return mulArray;
}
console.log(multipleArray(Array,5));
console.log("--------------------");
//2. Write a JavaScript program to sort by id an array of JavaScript objects.

let student =
  [{
    id :10,
    name:'koushiki',
  },
  {
    id:30,
    name:'aniket',
  },
  {
    id:20,
    name:'akash',

  }];

  student.sort(function(std1,std2){
    return std1.id -std2.id;
  });
  student.forEach(function(student){
    console.log(student);
  });
console.log("-------------------------------");
//3. Write a program to sort an integer array with custom number as reference.
let arr =[2,5,3,255,66,-88,-1];
function compare(a,b){
  return a-b;
}
console.log( arr.sort(compare));
console.log("----------------------");

/*
4. Ram got an assignment from his math teacher that he needs to get the number of 1’s from 0 to a
given binary number. But it is very hard to find so write a program which helps Ram to find it very
quickly.
*/

function numToBit(num){
  var number = num;
  var result = [];
  while(number >= 1 ){
      result.unshift(Math.floor(number%2));
      number = number/2;
  }
  return result;
}
console.log(numToBit(9));

console.log("---------------------");

/*
5. Ram is a college student and he has to submit the final year project which is password validator.
Write a program to help ram to Validate the given password.
*/









/*6. Write a function that converts an array of values from miles to kilometres using the map method. In
the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this
variable.
*/

function convertMilesToKilometers(arr){
  return arr.map(mile => mile*1.609);
}
 
function totalDistance(acc, cur){
  return acc + cur;
}
 
const km = convertMilesToKilometers([1,2,3,4,5,6]);
console.log(km);
let totalDistanceInKilometers = km.reduce(totalDistance, 0);
console.log(totalDistanceInKilometers);
