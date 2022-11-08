function seletionsort(array){
    for(let i=0;i<array.length;i++){
        minvalue=array[i];
        minindex=i;
        let j;
        for(j=i;j<array.length;j++){
            if(minvalue>array[j]){
            minvalue=array[j];
            minindex=j;
        }
        }
        let temp=array[i];
        array[i]=array[minindex];
        array[minindex]=temp;
    }
   return array 
}

let array=[2,3,1,4,5];
console.log(seletionsort(array));
