//insertion sort 1 to 100;

let array =[];
for(let k=1;k<=100;k++){
    array.push(k);
}

function insertionsort(array){
    for(let i=1;i<array.length;i++){
        let k=i;
        for(let j=k-1;j>=0&&array[j]<array[k];j--){
            let temp=array[j];
            array[j]=array[k];
            array[k]=temp;
            k--;
        }
    }
    return array;
}
console.log(insertionsort(array));

/* 
time compx= O(n^2) 
*/
console.log("-----------------------------------------");
//selection sort

function seletionsort(array){
    for(let i=0;i<array.length;i++){
        maxvalue=array[i];
        maxindex=i;
        let j;
        for(j=i;j<array.length;j++){
            if(maxvalue<array[j]){
            maxvalue=array[j];
            maxindex=j;
        }
        }
        let temp=array[i];
        array[i]=array[maxindex];
        array[maxindex]=temp;
    }
   return array 
}
console.log(seletionsort(array));

//time complexity =O(n^2);