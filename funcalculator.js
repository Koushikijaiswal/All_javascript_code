function calculator(no1,no2,operation){
    if(operation=="+"){
        let add =no1+no2;
        return add;
    }
    else if(operation=="-"){
       let sub =no1-no2;
       return sub;
    }
    else if(operation=="*"){
        let mul =no1*no2;
        return mul;
    }
    else if(operation=="/"){
        if(no2==0){
            console.log("division by 0 is not possible");
        }
        else{
            let div=no1/no2;
            div =div.toFixed(2);
            return div;
        }
    }
    else{
        console.log("please write correct operaor");
    }
}
console.log(calculator(4,5,"+"));
console.log(calculator(-4,5,"+"));
console.log(calculator(4,5,"-"));
console.log(calculator(4,-5,"-"));
console.log(calculator(4,5,"*"));
console.log(calculator(4,-5,"*"));
console.log(calculator(4,5,"/"));
console.log(calculator(4,-5,"/"));
console.log(calculator(14,5,"/"));
console.log(calculator(4,0,"/"));
console.log(calculator(4,5," "));
//https://www.loom.com/share/9b4a22fdfd2d4b59a0b99fe0ecbb89a0