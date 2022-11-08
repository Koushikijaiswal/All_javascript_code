/*Calculate the factorial of a given number recursively and find its time and space analysis*/

function fact(num){
    if(num==0){
        return 1;
    }
    return num*fact(num-1);
}
console.log(fact(4));

/*
time complixity = O(n),omega(n);
space complixity = O(n);
*/