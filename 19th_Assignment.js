/* Question 1: Create a JSON object for a showroom of cars, who sells cars of different brands.
JSON shall contain various details such as: car brand name, car models, price and few basic details.
Also write a program to print details of most expensive car
*/

let JSON =[
    {
    car_brand_name:"sujuki",
    car_mdodel: 1,
    car_prize:400000,
},
{
    car_brand_name:"wedw",
    car_mdodel: 2,
    car_prize:698000,
},
{
    car_brand_name:"huwadi",
    car_mdodel: 21,
    car_prize:300000,
},
];

JSON.sort((car_prize1,car_prize2) => {return car_prize1.car_prize -car_prize2.car_prize});
 console.log(JSON[JSON.length-1].car_prize);

 /*Question 2: Write a program to sort a given data using recursive approach.
*/
function issorted(arr,i){
    if(i=== arr.length){
        return arr;
    }
    if(arr[i]>arr[i+1]){
        var temp= arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
    return issorted(arr,i+1);
}
console.log(issorted([2,1,6,123,67],0));

/*Create an JSON object for grades of a class having structure
{"name": 'John', "grade": 8, "sex": 'M'},
Also write a program to find classroomAverage ,boysAverage ,girlsAverage,highestGrade and lowestGrade
*/




/*
Question 4: Write a program using recursion to print a triangle of length n.
Input: 5
Output:
* *
* * *
* * * *
* * * * *
*/
function printrow(n){
    let str="";
    if(n==0){
        return ;}
        console.log("* ");
        printrow(n-1);
    }
function pattern(n,i){
    if(n==0){
        return;
        printrow(i);
        console.log("\n")
        pattern(n-1,i+1);
    }
}
let n=5;
pattern(n,2);