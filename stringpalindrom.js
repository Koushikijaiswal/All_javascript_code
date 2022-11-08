// to check the string is palindrom "kayak";

// let word ="malayalam";
// let wordlength = Math.floor(word.length/2);
// console.log(wordlength);
// for(let i=0;i<=wordlength;i++){
//     if(word[i]!==word[word.length-i-1])
//        console.log("the string is not palondron");
//     else 
//         console.log("the string is palindrom");
// }

//using function
function palindrom(word){
    let wordlength =Math.floor(word.length/2);
    for(let i =0 ;i<=word.length/2; i++){
        if(word[i]!==word[word.length-1-i]){
            return false;
        }
        return true;
    }
}
console.log(palindrom("malayalam"));


//using recursion chech the string is palindrom or not

function stringpalindrem(str,start,end){
    if(start>end){
        return true;
    }
    if(str.charAt(start)===str.charAt(end)){
         return stringpalindrem(str,start+1,end-1);
}   else 
       return false;
}
let str ="malayalam"
console.log(stringpalindrem(str,0,str.length-1))