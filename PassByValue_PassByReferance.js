/* pass by value 
   while modify the copy variable the original variable value is not change
*/
let princhome ='kohinoor';
function steelkohinoor(lily){
    lily ='kohinoorcopy';
    console.log(lily);
}
steelkohinoor(princhome);
console.log(princhome);

console.log("----------------");

/*pass by referance
while modifying the property of copied object then original object change the address and pointing to the newer address 
and the privious adderess is gone to the garbage collector and the original and copied variable both value will changed
in pass by refecance we can not directly store value i the variable we can store the value into the object*/

let princhome1={
    equipament:'kohinoor'
};

function steelkohinoor1(lily){
    lily.equipament='kohinoorgayab';
    console.log(lily);
}
steelkohinoor1(princhome1);
console.log(princhome1);