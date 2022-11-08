// arrange the number in 1 to 100 in decreasing order

function bubblesort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]<array[j+1]){
                let temp =array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}
let array =[];
for(let k=1;k<=100;k++){
    array.push(k);
}
console.log(bubblesort(array));

//time complixity = O(100^2);