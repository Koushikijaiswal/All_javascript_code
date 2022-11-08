//palindrom number
const num=121;
let reversNo =0;
let copy=num;
while(copy>0){
    let digit = copy%10;
    reversNo = reversNo*10 + digit;
    copy=Math.floor(copy/10);
}
console.log(num===reversNo);

//write palindrom number 1 to n

let n=1000;
for(let i=1 ;i<=n;i++){
    let copy =i;
    let reversNumber =0;
    while(copy>0){
        let d = copy%10;
        reversNumber=reversNumber*10 +d;
        copy =Math.floor(copy/10);
    }
    if(reversNumber===i){
        console.log(i);
    }
}

//using function palindrom up to 50

function palindrom(n){
    for(let i=1 ;i<=n;i++){
        let c =i;
        let rn =0
        while(c>0){
            let di = c%10;
            rn = rn*10 +di;
            c = Math.floor(c/10);
        }
        if(rn ===i){
            console.log(i);
        }
    }
}   
palindrom(50);