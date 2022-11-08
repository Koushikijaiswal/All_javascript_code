//overriding

class Father{

    constructor(){
        console.log('hey I am father');
    }

    ability(){
        console.log("run fast");
    }
}


class Child extends Father{

    constructor(){
        super();
        console.log('hey I am child');
    }

    ability(){
        super.ability();//polymorphism/method overriding //father will not override there when super is not there
        console.log("X-ray version");
    }
}

let child = new Child();
child.ability();
console.log(child instanceof Father);
let father = new Father();
console.log(child instanceof Child);
father.ability();
console.log(father instanceof Child);
/*
super() ----> calling parent constructor
super.fun()-----> calling parent function
super.a ----> accessing the parent's property


*/