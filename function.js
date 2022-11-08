//creating a function
// function is a keyword and  sayhello is function name it is an identifire it follw all rule of identifire

function sayhello(name){
    console.log("hello",name);
    console.log("how are you");
    console.log("fine");
}
sayhello("koushiki"); //function call


// another example

function add(x,y){
    console.log(x+y);

}
add(7,8);

//function
function hello(name){
    console.log("hello",name);
    console.log("how are you ");
}

hello("koushiki");
hello("akash");
hello("aniket");


// return type function;

function square(x){
    let sq = x*x;
     console.log("you are jenious");
   
    return sq;
}   

let squarenumber = square(6);
console.log(squarenumber);

let powernumber = Math.pow(8,3);
console.log(powernumber);

//sum of odd number using function

function sumoddnum(n){
    let sum =0;
    for(let i=1;i<=n;i=i+2)
    {
      sum +=i;
    }
    return sum;
}
console.log(sumoddnum(10));

/* Requirements: "Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”" */

let j,l,k,p;
function job(j){
    return 'IAS offiser';
}

function location(l){
    return 'kolkata';
}

function partner(p){
    return 'kittu';
}

function kids(k){
    return 'four kids';
}

function astroguru(){
        console.log("you will be a"+" "+ job(j)+ " " + "in" + " "+ location(l)+" "+"and married to"+" "+ partner(p)+" "
        + "with"+" "+ kids(k)+"."  );
    }

astroguru();

//another way
// function astroGuru(jobTitle, geolocation, partner, numKids) {
//     var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
//     partner + ' with ' + numKids + ' kids.';
//     console.log(future);
//     }
//     astroGuru('astronaut', 'Spain', 'Shaq', 3);
//     astroGuru('stunt double', 'Japan', 'Bruce Wayne', 9);
//     astroGuru('Elvis impersonator', 'Russia', 'Elon Musk', 0); 

/*Another way
let  jobTitle,geolocation, partner1, numKids;
function astroGuru(jobTitle, geolocation, partner1, numKids) {
    
    console.log( 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
    partner1 + ' with ' + numKids + ' kids.');
  
    }
    astroGuru('astronaut', 'Spain', 'Shaq', 3);
    astroGuru('stunt double', 'Japan', 'Bruce Wayne', 9);
    astroGuru('Elvis impersonator', 'Russia', 'Elon Musk', 0); */