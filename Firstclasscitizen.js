//normal function
function bala1(x,y){
     return x+y;
}
console.log(bala1(9,8));


//first class citizen using
let bala = function(x,y)
{
    return x+y;
}
console.log(bala(9,8));

// function work as variable

let say =function(){
    console.log("hi")
};
say();
