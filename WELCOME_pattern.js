/*
c
co
Com
Come
comew
comewe
comewel
*/
let patternword = "WELCOME";
let word = Array.from(patternword);
console.log(word);
let wordhalflength =Math.floor(word.length/2);
console.log(wordhalflength);
let str ='';
for(let i=1;i<=7;i++){
    for(let j=1;j<=i;j++){
       // if(j<=i){
            if(i<=4){
                for(let i=wordhalflength;i<word.length;i++){
                    str =str+ word[i];
                }
            if(i>=5){
                for(let i=0;i<wordhalflength;i++){
                    str =str+word[i];
                }
            }
           // }
        }
    }
    console.log(str);
}

//
function pattern(str) {

    let mid = parseInt(str.length/2);
    let arr1 = str.slice(0, mid);
    let arr2 = str.slice(mid, str.length);

    for(let i=0;i<arr2.length;i++) {
        let temp = ''
        for(let j=0;j<=i;j++) {
            temp+=arr2[j];
        }
        console.log(temp);
    }
}
