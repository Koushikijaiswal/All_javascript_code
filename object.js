//how to create object
let obj = {name:"koushiki", age:21, city:["Asansol","pin- 713301"]};
console.log(obj.name);
console.log(obj.city[0]);
//console.log(obj.name.city[0]); getting error
let somevalue ={name:"js", value:[11,2,3,4,[1,2,32]]};
console.log(somevalue.value)
console.log(somevalue.value[4]);

//object
const car ={
    color :'black',speed:'120kmph',brand:'audi',start:function(){
        console.log('car started');
    },stop: function(){
        console.log('car stopped');
    },
}
const newcar=car;
newcar.brand='bmw';
console.log(car.brand);

//nested object

let nestobj = {listofmerocites: ["delhi","bangalor","kolkata","Asansol"],topcrikter :["sachin","rohit","virat","dhoni"],
 populationofstate : [{name : "karnataka" , population:"2m"},{name: "delhi" , population:"10m"},
{name: "kolkata",population:"7m"},{name:"asansol", population:"3m"}],
 countrycode:{name : "kolkata" , detailsname :"india", popularlangauge: ["hindi","bangel","english","marathi"],},}

 console.log(nestobj.listofmerocites);
console.log(nestobj.countrycode);
 console.log(nestobj.listofmerocites[2]);

 let you = {name :"kousiki",name:"kirti"};
 console.log(you.name);

//https://github.com/Koushikijaiswal/Assignment/blob/main/arrayfuncion.js

//minimun and maximun number

let Array =[23,43,21,4,511];
function minNumber(Array){
    //for(let i=0;i<Array.length ;i++){
       let minvalue = Array[0];
       for(let i=0;i<Array.length;i++){
        if(Array[i]<minvalue)
        {
            minvalue=Array[i];
        }
    } 
       return minvalue;
 }
 
 function maxNumber(Array){
    //for(let i=0;i<Array.length ;i++){
       let maxvalue = Array[0];
       for(let i=0;i<Array.length;i++){
        if(maxvalue <Array[i])
        {
            maxvalue=Array[i];
        }
    }
        return maxvalue;
       
 }
 console.log("The maximum value is"+" "+maxNumber(Array)+" "+"the minimum value is"+" "+minNumber(Array));

 //recursive program
 function recursivefun(num ,i){
  
        if(i>10){
            return 0;
        }
        else{
            console.log(` ${num} * ${i} = ${num*i}`);
            i++;
        }
    recursivefun(num,i); 
 }
 (recursivefun(10,1));

 function recursion(n){
    if(n==1){
        return 1;
    }
    else{
       return n*recursion(n-1); 
    }
 }
 console.log(recursion(2));


 //nested object program with function

 const movie = {
    name: 'Spiderman',
    genre: 'action',
    theatres: {
    imax: 'chennai',
    pvr: 'mumbai'
    },
    collection: '100cr',
    hit: function () {
    return `${name}, is hit`;
    },
    flop: function () {
    return `${name}, is flop`;
    },
    };
    const { name , hit, theatres } = movie;
    console.log(hit())
    const { imax, pvr } = theatres;
    console.log("theatres locations are", imax, 'and', pvr);

    // example
    let users = [
        {name: 'Ashutosh', age: 22,  hobbies: ['sing', 'dance']},
        {name: 'Akash', age: 23,  hobbies: ['draw']},
        {name: 'Aman', age: 22,  hobbies: ['drive', 'cook']},
        {name: 'Mayur', age: 21,  hobbies: []},
        {name: 'Nehal', age: 15,  hobbies: []},
    ];
    
    // for(let i=0;i<users.length;i++){
    // 	console.log(`Name is ${users.name}. age is ${users.age}, hobbie1 ${users[0].hobbies},hobbies2 ${users[1].hobbies}`);
    // }
    
    for(let user of users){
        console.log("name :" + user.name);
        console.log("age :" + user.age);
    
        for(let i=0;i<user.hobbies.length;i++){
            console.log(`hobbie  ${i+1} is ${user.hobbies[i]}` );
        }
    }

//
  //  let mat2 = new Array(4).fill(0).map(arr => new Array(5).fill(0));
//console.log(mat)
// let count=0
// for(let i=0;i<4;i++){
// 	for(let j=0;j<5;j++){
// 		mat[i][j] = count++;
// 	}
// }

// console.log(mat)


// let R=4 ,C =3;
// let count1=0;
// let mat1 =[];
// for (let i=0;i<R;i++){
//     for(let j=0;j<C;j++){
//          mat1[i][j]=count1++;
//     }

// }

// spiral program
let mat= [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9,10,11,12],
    [13,14,15,16,17,18]
];

/*
k - starting row index,
m - ending row index,
l - starting column index,
n - ending column index
i - iterator


*/

function printMatrixInSprial(mat,m, n) {
    
    let k = 0, l = 0, i = 0;

    while(k < m && l < n) {
        for(i = l; i < n; i++) {
            console.log(mat[k][i] + ' ');
        }
        k++;

        for(i = k; i < m; i++) {
            console.log(mat[i][n-1] + ' ');
        }
        n--;

        if(k<m) {
            for(i = n-1; i >= l; i--) {
                console.log(mat[m-1][i] + ' ');
            }
            m--;
        }

        if(l< n) {
            for(i=m-1; i>=k; i--) {
                console.log(mat[i][l] + ' ');
            }
            l++;
        }
    }

}
printMatrixInSprial(mat ,3,6);