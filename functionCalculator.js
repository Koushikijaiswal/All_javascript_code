function calculator(no1,no2,operation){
    if(operation=="+"){
        let add =no1+no2;
        return add;
    }
    else if(operation=="-"){
        let sub = no1-no2;
        return sub;
    }
    else if(operation=="*"){
        let mul =no1*no2;
        return mul;
    }
    else if(operation=="/"){
        if(no2==0){
            console.log("division is not possible");
        }
        else{
            let div =no1/no2;
            return div;
        }
    }
}
console.log(calculator(4,5,"+"));
console.log(calculator(4,5,"-"));
console.log(calculator(4,5,"*"));
console.log(calculator(-4,5,"*"));
console.log(calculator(4,-5,"/"));
console.log(calculator(14,5,"/"));
console.log(calculator(-4,5,"-"));
console.log(calculator(4,0,"/"));