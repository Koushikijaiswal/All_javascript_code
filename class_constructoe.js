class laptop{
    make;
    model;
    ram;
    constructor(make,model,ram){
        this.make=make;
        this.model=model;
        this.ram=ram;
    }
    print(){
        console.log(this);
    }
}
let laptop1 =new laptop('dell','inspret','12 gb');
console.log(laptop1);
console.log(laptop);
laptop1.print();

console.log("===============================");

class rectringle{
    height;
    width;;

    constructor(height,width){
        this.height=height;
        this.width=width;
    }

    get area(){  //this area is not a function it will define the property and gives me the valus
        return this.calculatearea();
    }

    set area(areaSize){
        return console.log(areaSize);
    }

    calculatearea(){
        return this.height*this.width;
    }
}

let rect = new rectringle(4,2);
rectringle.area=22;
console.log(rectringle.area);
console.log(rect);
