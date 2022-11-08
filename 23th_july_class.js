function uniqueElement(arr) {
    let result = 0;
    for(let element of arr) {
        result = result ^ element;
    }
    return result;
}

// console.log(uniqueElement([3,2,1,2,3]));
// console.log("--------------------------");
// function operators(a, b) {
//     console.log(a & b);
//     console.log(a | b);
//     console.log(a ^ b);
// }
// //operators(10,13);

// //complements.



//find hrb.index
function findPair(arr, number) {
    let temp = new Array(arr.length);
    for(let i=0;i<arr.length;i++) {
        temp[i] = [arr[i], i];
    }

    temp.sort((a, b) => a[0] - b[0]);
    //temp.forEach((inside) => console.log(inside));

    let i=0;
    let j=temp.length - 1;
    while(i < j) {
        if(temp[i][0] + temp[j][0] > number) {
            j--;
        } else if(temp[i][0] + temp[j][0] === number) {
            return [temp[i][1], temp[j][1]];
        } else {
            i++;
        }
    }
    return -1;

}
 //console.log(findPair([20, 40, 10, 10, 90, 70, 5], 25));


// /*
//     [
//         [20, 0],
//         [40, 1],
//         [10, 2],
//         [10, 3],
//         [90, 4],
//         [70, 5],
//         [5, 6]
//     ]


//     [
//         [5, 6],
//         [10, 2],
//         [10, 3],
//         [20, 0],
//         [40, 1],
//         [70, 5],
//         [90, 4]
//     ]


// */

// function allSubarrays(arr) {

//     for(let i=0;i<arr.length;i++) {
//         let temp = [arr[i]];
//         console.log(temp);
//         for(let j=i+1;j<arr.length;j++) {
//             temp.push(arr[j]);
//             console.log(temp);
//         }
//     }
// }

// allSubarrays([1,2,3,4]);

// /*
//     [1,2,1,2,2]
//     i= 0 
//         candiate = 1
//         count = 1
//     i=1
//         count = 0
//     i=2
//         count = 1
//         candiate = 1
//     i=3
//         count = 0
//     i=4
//         count = 1
//         candidate = 2
//  */
// function majorityElement(arr) {
//     let count = 0;
//     let candidate = -1;
//     for(let i=0;i<arr.length;i++) {
//         if(count === 0) {
//             candidate = arr[i];
//             count = 1;
//         } else {
//             if(candidate === arr[i]) {
//                 count++;
//             } else {
//                 count--;
//             }
//         }
//     }
//     count = 0;
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] === candidate) {
//             count++;
//         }
//     }
//     return count*2 > arr.length ? candidate : -1;
// }

//2nd method of majority element means the no. of any repeted element is greater then half of the length

function majorityele(arr){
    let n= Math.ceil(arr.length/2);
    let count =0;
for(let j=0;j<arr.length;j++){
   for(let i=0;i<arr.length;i++){
    if(arr[j]===arr[i+1]){
        count ++;
    }
    if(count>=n){
        return arr[j];
    }
}
count =0;
   }
  // j++;
   //count=0;
}
let arr =[2,1,1,2,2];
//console.log(majorityele(arr));
function majorityE(arr){
    let threshold =Math.floor(arr.length)/2;
    let map={};
    for(let i=0;i<arr.length;i++){
        let value = arr[i];
        map[value] = map[value] +1||1;
        if(map[value]>threshold)
        {
            console.log(map[value]);
             return value;}
    };
    return false;
    
};
console.log(majorityE(arr));
//intersection of two array

function Intersection(arr1,arr2){
    let result =[];
    let i=0;j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] === arr2[j]){
            result.push(arr1[i]);
            i++;
            j++;
        }else if(arr1[i]<arr2[j]){
            i++;
        }
        else{
            j++;
        }
    }
    return result;
}
//console.log(Intersection([1,2,3,3,4,6],[1,3,5]));
//console.log("------------------------------------");

//find the tripalate let [11,2,3,4,6,5,7,8] find sum of the three numbers 18 -->[3,7,8]
function findPair(arr, number,isAlreadySorted,start,end) {
     let temp = new Array(arr.length);
        for(let i=0;i<arr.length;i++) {
            temp[i] = [arr[i], i];
        }
    if(!isAlreadySorted)
        temp.sort((a, b) => a[0] - b[0]);
        //temp.forEach((inside) => console.log(inside));
    
        let i=start;
        let j=end;
        while(i < j) {
            if(temp[i][0] + temp[j][0] > number) {
                j--;
            } else if(temp[i][0] + temp[j][0] === number) {
                return [temp[i][1], temp[j][1]];
            } else {
                i++;
            }
        }
        return -1;
    
    }

function FindTriplate(arr,traget){
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        let first=arr[i];
        let pairs=findPair(arr,traget-first,true,i+1,arr.length-1);
       if(pairs !== -1){
        return [first,arr[pairs[0]],arr[pairs[1]]];
       }
    }
return -1;
}    
//console.log(FindTriplate([1,2,5,7,8,3],18));


//sum of the uniqe elemwnt in the array

function findsum(arr,n){
    arr.sort();
    let sum=0;
    for(let i=0;i<n;i++){
        if(arr[i]!==arr[i+1]){
            sum += arr[i];
        }
    }
    return sum;
}
let arr1=[1,2,3,1,1,4,5,6];
let n=arr1.length;
console.log(findsum(arr1,n));
