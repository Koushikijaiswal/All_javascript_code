//Inheritance 

function vehicle(brand,model,price,speed,wheel){
    this.name ={
        'brand':brand,
        'model': model
    };
    this.price =price;
     this.speed = speed;
      this.wheel=wheel;

}

vehicle.prototype.feature = function() {
    console.log(this.name.brand+" "+this.name.model+" ");
}

class bike extends vehicle{
    constructor(brand,model,price,speed,wheel,centerOfGravity){
        super(brand,model,price,speed,wheel);
        this._centerOfGravity = centerOfGravity;
    }

    get centerOfGravity(){
        return this._centerOfGravity;
    }

    set centerOfGravity(newCenterOfGravity){
        this._centerOfGravity= newCenterOfGravity;
    }
}