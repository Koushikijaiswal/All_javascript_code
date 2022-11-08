// All subciquences of array [1,2,3]

function allsubciquences(arr , current, i){

    if(i===arr.length){
        console.log(current);
        return ;
    }
    allsubciquences(arr,current,i+1);

    current.push(arr[i]); // [],[3],[2],[2,3],[1],[1,3],[1,2][1,2,3]

    allsubciquences(arr,current,i+1);
    current.pop(); /* pop if here because array working on the passing on referance 
 so the last 4 value is fill all the arr so we remove one by one and back that is why pop will use*/
}
allsubciquences([1,2,3],[],0);
console.log("-------------------------");
// how many possibiliies lily meet chintu here index is started from 1

function countways(r,c){
    if(r===1 || c===1){
       return 1;
    }
    if(r<1 || c<1){
        return 0;
    }

    return countways(r-1,c) + countways(r,c-1);
}
console.log(countways(2,3));

// no of possible bracket n=2 then (()),()()

function generatebrackets(n,open,close,str){
    if(open + close ===2*n){
        console.log(str);
        return;
    }
    if(open<n){
        generatebrackets(n,open+1,close,str+'(');
    }
    if(close <open){
        generatebrackets(n,open,close+1,str+')');
    }
}
generatebrackets(3,0,0,'');

//lexographical number 

function lexographical(i,n){
    if(i>=n){
        return;
    }
    console.log(i);
    lexographical(i*10,n);
    if(i%10 !=9){
        lexographical(i+1,n);
    }
}
lexographical(1,21);

// String permutation

function purmutation(str,s,e){

    if(s===e){
        console.log(str);
        return;
    }
    for(let i=s;i<=e;i++){
        purmutation(swap(str,i,s),s+1,e);
    }
}
function swap(str ,i,j)
{
    let strarry =str.split('');
    let temp =strarry[i];
    strarry[i]=strarry[j];
    strarry[j]=temp;
    return strarry.join('');
}
purmutation('ABC',0,2);