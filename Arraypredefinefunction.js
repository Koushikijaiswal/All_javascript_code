//some predefine funtion

//using (-ve) , and (+ve) index
let Array =[13,17,115,116];
console.log(Array);
Array[1]=16; // updating index 1 with new element
console.log(Array);
Array[13] = 92; //adding new element appand the value upto 13 index
console.log(Array);
console.log(Array.length); //14
Array[-1]=20;
console.log(Array);
Array[-22]="koushiki";
console.log(Array);
console.log(Array[-22]); // it will print index -22 value "koushiki"
console.log(Array.length); //14 length will be same because (-ve) index value can not consider as a length of an array

let A=Array.at(-22); // what is the problem here why -22 index value is not come if we use at() function ??????
console.log(A);
console.log(Array.at(-22)); //why it will  print undefined ??????
console.log(Array.at[-1]); // undefine

let Arr =[2,4,5,12];
console.log(Arr.at(-1)); // it will print 12 
console.log(Arr.at(4)); // print undefined because here not any value assigned

// forEach loop 
// forEach loop has not any return type
let school ={student: [{S1:{name:"koushiki" ,age :21, dept:"cse"}}, {S2:{name:"akash" , age:21 }}] , 
subject:["hindi", "english","bangla","history","geography","math","science"], class:[1,2,3,4,5,6,7,8,9,10],section:["A","B"]};
console.log(school);  //it will print with in S1 it is an object like that
console.log(school.student);
console.log(school.student[0]); // it will print zero index of school
console.log(school.student.S1); // why it will print undefined ?????????
// //console.log(school.student.S1.name); // what is the error here ????????
school["dept2"]="ece";
console.log(school);  // it will add at last key value

school.student["dept3"]="civil";
 console.log(school); //dept3 add at the student array but not last index of array student
 console.log(school.student[2]);
 console.log(school.student.at[-1]);
 console.log(school.student[0]);

//  let deptset = school.student.map(element =>{return {...element, dept:"EEE"};});
//  console.log(school);
school.student[1].S2["dept"]="EEE";
 console.log(school);    // why it shows error // how to set Akash dept as EEE

//forEach loop
school.student.forEach(element => {
    console.log(element);
});

school.class.forEach((ele ,index) =>{
    console.log(`index ${index} element is ${ele} `);
});

[1,3,5,7].forEach((ele ,index,array) =>{
    console.log(`index ${index} element is ${ele} and ${array} `);
});

//using map 

school.class.map((ele ,index) =>{
    console.log(`index ${index} element is ${ele} `);
});

[1,3,5,7].map((ele ,index,array) =>{
    console.log(`index ${index} element is ${ele} and ${array} `);
});

// map and foreach using function
let A1=[11,23];
function foreachreturn(value ){
   return value.forEach(element =>{
         return `the element are  ${element}`;
    });
}
console.log(foreachreturn(school.class));// undefined  foreach does not have any return type

function mapreturn(value){
    return value.map(element =>{
          return element;
     });
 }
 console.log(mapreturn(A1));

 function mapreturn1(value){
    return value.map(element =>{
          return element;
     });
 }
 console.log(mapreturn1(school.class));

 //difference between freeze and const

 // freeze

 let tempobj = {name :"akash"};
 Object.freeze(tempobj);
 console.log(tempobj);
 tempobj["age"]=21;
 console.log(tempobj); // does not add any value 
 //let tempobj =[1,2,3]; // redecleare is not possible it throw an error
 tempobj=[3,45]; // it does not add any new value but reassignment is posible
 console.log(tempobj);
let arry =[3];
Object.freeze(arry);
// arry.push(9);  //push pop can not work in freeze function it throw an error
console.log(arry);

 // const

 const Arry =[23,43,454];
 console.log(Arry);
 Arry[1]=21; //update is possible
 console.log(Arry);
 Arry.push(33);
 console.log(Arry);
 Arry.pop();
 console.log(Arry); // push pop function can work in const function
 //const Arry =[685,97]; // redeclearation is not possible it throw an error
// console.log(Arry);

// Arry = [635,886];
// console.log(Arry);  //reassign is not possible it throw an error
// if we decleare const and freeze any array the redeclearation or reassignment do not possible 

//seal and issealed function 

// in seal function key is not change but value can change

let tempob = {greet:"hello", reply:"hi"};
Object.seal(tempob);
console.log(tempob);
tempob["anotherreply"] ="byee";
console.log(tempob); // key is not change  it is same as previous value
tempob["greet"] ="bye";
console.log(tempob);//key is not change but value can change
console.log(Object.isSealed(tempob));

// shift and unshift
const fruits = ['Apple', 'Banana'];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
const addfirstele =fruits.unshift('orange');
console.log(fruits);

//splice and indexof

const fruits1 = ['Strawberry', 'Banana', 'Mango'];
const start = fruits1.indexOf('Banana');
const deleteCount = 1;
const removedItems = fruits1.splice(start, deleteCount);
console.log(fruits1);
// ["Strawberry", "Mango"]
console.log(removedItems);
// ["Banana"]

//multiple delete and add

const fruits2 = ['Apple', 'Banana', 'Strawberry', 'Mango'];
const start1 = 1;
const deleteCount1= 2;
const removedItems1 = fruits2.splice(start1, deleteCount1);
console.log(fruits2);
// ["Apple", "Mango"]
console.log(removedItems1);
// ["Banana", "Strawberry"]

const fruit = ['Apple', 'Banana', 'Strawberry'];
const start2 = -2;
const deleteCount2= 2;
const removedItems2 = fruit.splice(start2, deleteCount2, 'Mango', 'Cherry');
console.log(fruit);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems2);
// ["Banana", "Strawberry"]


//use of for....of
const fruits4 = ['Apple', 'Mango', 'Cherry'];
for (const fruit1 of fruits4) {
  console.log(fruit1);
}
// Apple
// Mango
// Cherry

//foreach
const fru = ['Apple', 'Mango', 'Cherry'];
fru.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2


//group()
const inventory = [
    { name: 'asparagus', type: 'vegetables' },
    { name: 'bananas',  type: 'fruit' },
    { name: 'goat', type: 'meat' },
    { name: 'cherries', type: 'fruit' },
    { name: 'fish', type: 'meat' }
  ];
  //let result = inventory.group( ({ type }) => type );
// console.log(result.vegetables);
  // expected output: Array [Object { name: "asparagus", type: "vegetables" }]