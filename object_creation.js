const { createConnection } = require("net");

//object creation
let obj = {name:"koushiki", age:21, city:["Asansol","pin- 713301"]};
console.log(obj.name);
console.log(obj.city[0]);
let somevalue ={name:"js", value:[11,2,3,4,[1,2,32]]};
console.log(somevalue.value)
console.log(somevalue.value[4]);


//using construction object createConnection

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
      return this.firstName + " " + this.lastName+" "+this.age+" "+" and her eyecolor is "+" "+eyecolor;
    };
  }
  let Person1 = new Person("koushiki","jaiswal",21,"brown");
  console.log(Person1.name());