//oops concept

//constructor
//we create an object
function laptop(type){
    this.make =type;
    this.ram ='8 gb';
}
let lap1 =new laptop("lenavo");
let lap2 =new laptop("dell");
let lap3 = new laptop("hp");
console.log(lap1);
console.log(lap2);
console.log(lap3);

console.log("____________");
//global object
function make2(){
     console.log(this);
 }
 make2();
 console.log("________________");
 console.log(this);
 console.log("++++++++++++++++++++++++");

function make1(){
   this.Name='koushiki123';
    console.log(this);
    console.log(this);
}
make1();
console.log("********************");
console.log(this);
console.log("/////////////");
// arrow function is not a global object

let make3 = ()=>{
    console.log(this);
}
make3();
console.log("-----------------------------");
console.log(this);
console.log("--------------------");
let make = ()=>{
    this.Name='aniket';
    console.log(this);
    console.log(this);
}
make();
console.log("______------------------");

console.log(this);
console.log("=============================");
function laptop4(type){
    this.type;
    this.type ='dell';
    this.ram= '8 gb';
    this.print=function(){
        console.log(this);
    }
   // this.print();
}
laptop4("lenovo");
//console.log(laptop4("lenovo"));
let laptop5 = new laptop4("lenovo");
console.log(laptop5);

console.log("++++++++++++++++++++++++++");

let made= (type)=>{
    this.make=type;
    this.make1='dell';
    this.type1 ='dell';
    this.ram= '8 gb';
    this.print=()=>{
        //console.log(this);
    }
   this.print();
}
made("lenovo");
//console.log(laptop4("lenovo"));
/*
let laptop7 = new made("lenovo"); made is not a constructor because it is an arrow function so we can not 
create an object error occurr
console.log(laptop7);*/
console.log(made);
console.log(this);

//constructor within constructor
/*
console.log("_________---------------------___________");
function car(type){
    this.type=type;
    this.seat=4;
    this.bike= function(brand){
        this.brand=brand;
        this.milez="60 kphr";
        console.log(this+"bike");
        function print(){
            console.log(this+"print"); 
        }
        print();
       console.log(this+"yoy");
      
    }
}
console.log(car("OOO"));
car("bazaz");
let car1 =new car("maruti");
let car2 =new car("neno");
console.log(car1);
console.log(car2);

let bike1= new bike("yamaha1");
console.log(bike1);
console.log("=======");
car1.bike(bike1);
console.log("+++++++++");
car1.bike(this);
console.log("------------");
car1.bike(this.bike1);

*/
console.log("============================================");

//using arrow function

console.log("_________---------------------___________");
function car(type){
    this.type=type;
    this.seat=4;
    let bike= (brand)=>{ // here bike is a function not a constructor so we does not create an object
        this.brand=brand;
        this.milez="60 kphr";
        console.log(this+"bike");
    let print=()=>{
            console.log(this+"print"); 
        }
       // print();
       print();
       console.log(this+"yoy");
     console.log( bike("yamaha"));
    }
}
console.log(car("OOO"));
car("bazaz");
let car1 =new car("maruti");
let car2 =new car("neno");
console.log(car1);
console.log(car2);
//console.log(car1.bike("yamaha"));

/*
let bike1= new bike("yamaha1");
console.log(bike1); // in varrow function bike is not a constructor so error
console.log("=======");
car1.bike(bike1);
console.log("+++++++++");
car1.bike(this);
console.log("------------");
car1.bike(this.bike1);
*/
