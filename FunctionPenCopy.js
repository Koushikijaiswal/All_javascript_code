function market(N){
    if(N<10){
        let r=10-N;
        console.log(r +" "+"money required");
    }
    else if(N>=10 && N<50){
        let p = N/10;
        console.log("you will get"+" "+ p +" "+"pen");
    }
    else if(N===50){
     console.log("Eiher you will get 1 copy or 5 pen");
    }
    else if(N>50 && N<=59){
      console.log("you will get either 1 copy or 5 pen");
    }
    else if(N>=60){
        let pe = N/10;
        let c =N/50;
        console.log("you will get"+" "+pe+" "+"pen"+" "+"or"+" "+c+" "+"copy");
    }
}
market(9);
market(10);
market(20);
market(50);
market(58);
market(100);