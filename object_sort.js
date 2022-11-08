// second maximun salary in bubble sort

let array =[
    {name:'Ram',
     salary:110033},
     {
        name: 'Rakesh',
        salary:9880787
     },
     {
        name:'Ramesh',
        salary:827402
     },
];

/*function bubblesort(array,k){
    for(let i=0;i<k;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j].salary>array[j+1].salary){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array[array.length-k].name;
}
console.log(bubblesort(array,2));
*/

function bubblesort(array,k){
    for(let i=0;i<k;i++){
        let isswap=false;
        for(let j=0;j<array.length-1-i;j++){
            if(array[j].salary>array[j+1].salary){
                swap(array,j,j+1);
                isswap=true;
            }
        }
        if(!isswap){
            break;
        }
    }
    return array[array.length-k].name;
}
console.log(bubblesort(array,2));



function swap(array , i, j){
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    
    return array[i];
}