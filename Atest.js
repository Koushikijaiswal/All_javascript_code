// // // forEach loop has not any return type
// // let school ={student: [{S1:{name:"koushiki" ,age :21, dept:"cse"}}, {S2:{name:"akash" , age:21 }}] , 
// // subject:["hindi", "english","bangla","history","geography","math","science"], class:[1,2,3,4,5,6,7,8,9,10],section:["A","B"]};
// // console.log(school);
// // let deptset = school.student.map(element =>{return {...element, dept:"EEE"};});
// // console.log(school);
// // console.log(school.student[1]);

// // let users = [
// //     {name: 'Ashutosh', age: 22,  hobbies: ['sing', 'dance']},
// //     {name: 'Akash', age: 23,  hobbies: ['draw']},
// //     {name: 'Aman', age: 22,  hobbies: ['drive', 'cook']},
// //     {name: 'Mayur', age: 21,  hobbies: []},
// //     {name: 'Nehal', age: 15,  hobbies: []},
// // ];

// // // for(let i=0;i<users.length;i++){
// // // 	console.log(`Name is ${users.name}. age is ${users.age}, hobbie1 ${users[0].hobbies},hobbies2 ${users[1].hobbies}`);
// // // }

// // for(let user of users){
// //     console.log("name :" + user.name);
// //     console.log("age :" + user.age);

// //     for(let i=0;i<user.hobbies.length;i++){
// //         console.log(`hobbie  ${i+1} is ${user.hobbies[i]}` );
// //     }
// // }



// /*
// function maxRowUniqueElements(matrix) {

//     return matrix.map(function(inisde) {
//         let uniqueElements = Object.entries(inisde.reduce((accumlator, element) => {
//             if(accumlator[element]) {
//                 accumlator[element] = accumlator[element] + 1;
//             } else {
//                 accumlator[element] = 1;
//             }
//             return accumlator;
//         }, {})).reduce((accumlator, pair) => {
//             if(pair[1] === 1) {
//                 return accumlator + 1;
//             }
//         }, 0);
//         return uniqueElements;
//     }).reduce((accumlator, element) => Math.max(accumlator, element), 0);
// }
// let matrix= [
//   [2,3,3],
//   [2,4,5],
//   [11,11,11]
// ];
// console.log(maxRowUniqueElements(matrix));


// //user input
// // const readline = require('readline').createInterface({
// //     input: process.stdin,
// //     output: process.stdout,
// //   });
  
// //   readline.question(`What's your name?`, name => {
// //     console.log(`Hi ${name}!`);
// //     readline.close();
// //   });
// */

// var longestNiceSubstring = function(s) {
//     var array= [];
//     array.push(s.split(" "));
//     return array;
// };

// var s="YazaAay";
// console.log(longestNiceSubstring(s));

var longestConsecutive = function(nums) {
    nums.sort(function(a,b){
        return (a-b);
    });
    let i,count=0,arr=[];
    for(i=0;i<nums.length;i++){
    if(nums[i]+1==nums[i+1]){
        count ++;
        arr.push(count);
    }
    else if(nums[i]===nums[i+1]){
        arr.push(count);
    }
    else{
        count =1;
        arr.push(count);
    }
    }
    let maxele=Math.max(...arr);

    return maxele;
  //  return nums;
};

let nums = [100,10,102,200,1,31,12];
console.log(longestConsecutive(nums));