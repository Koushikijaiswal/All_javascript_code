let no=10;
console.log(++no,no++);
console.log(1);
let a='0';
for(a;a<5;++a)
console.log(a);

let{name,age}={name:"abc",age:"5",id:1}
console.log(name,age);

console.log(parseInt("hello123"),parseInt(123),parseInt("123he"));

let i=0;
do{
    console.log(++i);

}while(i<5);

function add(num1){
    return function(num2){
        return num1+num2;
    }
}
console.log(add(5)(5));

let a1,b,k=0;

function test(ch){
    switch(ch){
        case 1:
            console.log(1);
            break;
            case "1":
                console.log("char1");
                break;
                default:
                    console.log("inva");
    }
}
console.log(test(1),test("1"));


console.log("---------------");

function admissionEligibility(Maths,Physics,Chemistry){
     let Total=Maths+Physics+Chemistry; let MP=Maths+Physics; 
    if(Maths>=65 && Physics>=55 && Chemistry>=50){
        if(Total>=195 || MP>=140){
            console.log("Eligible");
        }
        else{
            console.log("Not eligible");
        }
      }
      else{
        console.log("Not eligible");
      }
}
admissionEligibility(65,71,52);
admissionEligibility(70,75,52);
admissionEligibility(55,80,90);
admissionEligibility(70,71,52);



let word1="abc"; let word2 =" pqr";
 array=word1.split(" ",3);
console.log(array);


let w1=[];let w2=[];let arr=[];let newword;
	w1=Array.form(word1);
	w2=Array.form(word2);
    console.log(w1);
    console.log(w2);
	for(let i=0,j=0;i<w1.length,j<w2.length;i++,j++){
		arr.push(w1[i]);
		arr.push(w2[j]);
	}
console.log(arr);