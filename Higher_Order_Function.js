/* if a function passing any function as an argument or as an input is called higer order function*/

function sum(a,b,display){
    let c = a+b;
    display(c);
}
function display(...input){     //Rest Operator triple dot ... convert output in array form
    console.log(input);
}
sum(1,3,display);
sum(13,3,display);
console.log("-------------------");

// filter uses 
let arr =[1,2,3,4,5,6,7,8,9,10];
let arr1 =arr.filter((Element)=>{
    return Element%2==0;
});
console.log(arr1);
console.log(arr); // after applieng the filter function the original array will not be change
console.log("-------------------");

//map function
let teansform =arr.map(Element =>{
    return Element*Element;
})
console.log(teansform);
console.log(arr);   //after appling map function the original array will not be changes
console.log("-------------------");

//map function

let transform = arr.map(function(Element,index,whole_array){
    return (`element --> ${Element}, index--> ${index}, The whole array --> ${whole_array}`);
});
console.log(transform); //in map we can return thec value
console.log("----------------------------------");

//for each
arr.forEach(function(element,index,wholeArray){
   console.log(`element --> ${element}, index--> ${index}, The whole array --> ${wholeArray}`);
   });
console.log("------------------------------");

// for loop
let array=[];
 for(let element of arr){
    array.push(element);
   }   
console.log(array);
console.log("-----------------------------");

//sort array
/* here  (-ve) means placed 1st argumnet before 2nd argument 
here (+ve) means placed 2nd argument before  1st argument */
let unshorted = [2,3,212,1,3,4,4,5,2,5];
let sorted =unshorted.sort(function(a,b){
    if(a>b){
        return -1;
    }
    else 
        return 1;
})
console.log(sorted);
console.log(unshorted);
console.log("--------------------------------");
//another way to sort
let s=unshorted.sort((a,b)=>{
    return a-b;
});
console.log(s);
console.log(unshorted); // after applieng sort function the original array also will changed
console.log("---------------------------------");

//sort an array shift 1 at last position

unshorted.sort((a,b)=>{
    if(a===1)
       return 1;
    if(b===1)
       return -1;
    return a-b;
});
console.log(unshorted);
console.log("---------------------------------");
//sort an object with id 

let student =[
     {
        id :10,
        name:'koushiki',
     },
     {
        id:30,
        name:'akash',
     },
     {
        id:20,
        name:'aniket',
     },
];
student.sort(function(std1,std2){
    return std1.id-std2.id;
});
console.log(student);
console.log("-----------------------------");

//reduce function
arr.reduce(function(accumulator,element){
    return element;
},1);
console.log(arr);
console.log("--------------------------------------");

//composability  passing one functio or one function output into another function
function sun(a,b){
    return a+b;
}
function serious(number){
        return number*2;
}
console.log(serious(sun(2,3)));

//curring   dividing functinallty into chunks /part is called curring 
function calculateMax(input1){
    let max = input1;
    return function(input2){
        max =Math.max(max,input2)
            return function(input3){
                max=Math.max(max,input3)
                    return max;
                }
            }
        }
let maxno = calculateMax(3)(9)(2);
console.log(maxno);    
console.log("--------------------------------");

//this operator  this used to a global scope is also an object a window object
let a1=0;
function any(){
    console.log(this.a); //undefine
}
any();
console.log(this.a); // undefine print both print statement because this access only an object not any variable
console.log("-------------------");
function anyobj(){
    let obj ={
        a :3,
        print:function(){
            console.log(this.a);
        }
    }
    obj.print();
    console.log(obj.a);//3
    console.log(this.a);//undefine
    console.log(obj);
}
anyobj();
console.log("----------------------------------");

// function constructor  function name started with capital later
function Superhero(realname,heroname)
{
  this.realname = realname;
  this.heroname=heroname;
  this.fight = function(){
    console.log("figiting");
  }
}
let superhero1 = new Superhero("gangadhar","saktiname");
console.log(superhero1);
superhero1.fight();
console.log(superhero1.heroname);
//Superhero.fight(); error because we create an object and store in superhero1
console.group("----------------------------------");

// closor constrctor with using function creating object

function Counter(){
    let count =0;
    this.increase = function(){
        count ++;
    }
    this.print=function(){
        console.log(count);
    }

    //return this.increase();
}
let counter1 = new Counter();
counter1.increase(); //1
counter1.increase(); //2
counter1.increase(); //3
counter1.print(); //3
//console.log(Counter());
let counter2 =new Counter();
counter2.increase(); //1
counter2.increase();//2
counter2.print(); //2
console.log("-----------------------------------------");

// without using function
//function objectincrement(obj1){
    let count =0;
    let obj1 ={
      increase: function(){
        count++;
      },
      print: function(){
        console.log(count);
      }
    }
//}

obj1.increase();
obj1.increase();
obj1.print();
console.log("----------------------------------");

//Arrow function 
let sum1 = (a,b)=> a+b;
console.log(sum1(2,3));
//1st way arrow funtion
let sum2=function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let value =sum2(2)(3)(4);
console.log(value);
//2nd way arrow function
let sum3=(a)=>(b)=>(c)=> a+b+c;
let value1 =sum3(2)(3)(4);
console.log(value1);
console.log("--------------------------------");

//1. this function
function check(){
    console.log(this);
}
check();
console.log("----------------------------------------");

//2.
let obj = {
    check :function(){
        console.log(this);
    }
}
obj.check();
console.log("---------------------------------------");

//3.
this.a=2;
console.log(this);
console.log("----------------------------------------");

//4.
let ob={
  a:2,
}
console.log(ob);
console.log("---------------------------------");
//5. global
// globalThis.a=3;
// console.log(globalThis);
// let O={ check1: ()=>.{
//     console.log(a);
// }
// }
// O();

//call back function characterstic of var and let 
//1. local scope var
for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i); //5 5 5 5 5 5 after all time increment only last time var i
    },2000);
}
console.log("-------------");
//2.global variable j

var j;
for(j=0;j<5;j++){
    setTimeout(()=>{
        console.log(j);
    },2000);
}
console.log("--------------------------");
//let local
for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i); //0 1 2 3 4 after all time increment only last time var i
    },2000);
}
console.log("------------------------"); //line will be print first because the time is lessthen the time set
//let global
let k;
for(k=0;k<5;k++){
    setTimeout(()=>{
        console.log(k); //5 5 5 5 5 5 after all time increment only last time var i
    },2000);
}

//todos:['getup in morning','take a sower','take A breakfast','get ready for school','study well','have lunch','come from school','play games','have dinner','go to sleep'],