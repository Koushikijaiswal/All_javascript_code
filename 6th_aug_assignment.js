// print 82=8x8=64
function powernum(number){
    let digit ,power=1;
    digit =number%10;
    number =Math.floor(number/10);
    for(let i=1;i<=digit;i++){
        power =power*number;
    }
    return power;
}
console.log(powernum(82));