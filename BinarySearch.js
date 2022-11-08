function binarysearch(arr,target){
    let i=0,j=arr.length-1;
    while(i<=j){
        let mid = Math.floor((i+j)/2);
        if(arr[mid]===target){
            return mid;
        }
        if(target>arr[mid]){
            i=mid+1;
        }
        else{
            j=mid-1;
        }
    }
    return -1;
}

console.log(binarysearch([1,2,3,4,5,6,7,8,9],10));
//time complexity = O(log n);


/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/
function findLeftMostIndex(nums,target){

    let i=0,j=nums.length-1;

    let ans=-1;

    while(i<=j){

        let mid=Math.floor((i+j)/2);

        if(nums[mid]===target){
            ans=mid;
            j=mid-1;
            continue;
        }
        if(nums[mid]>target){
            j=mid-1;

        }else{
            i=mid+1;
        }
    }

    return ans;
}

function findRightMostIndex(nums,target){

    let i=0,j=nums.length-1;

    let ans=-1;

    while(i<=j){

        let mid=Math.floor((i+j)/2);

        if(nums[mid]===target){
            ans=mid;
            i=mid+1;
            continue;
        }

        if(nums[mid]>target){
            j=mid-1;

        }else{
            i=mid+1;
        }
    }

    return ans;
}




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

  return [findLeftMostIndex(nums,target),findRightMostIndex(nums,target)];
    
};
let nums=[2,3,7,7,8,8,9]; let target=8;
console.log(searchRange(nums,target));



function squrtfun(x){
    let i=1 , j=x;
    while(i<j){
        let mid = Math.floor((i+j)/2);
        if(mid*mid===x){
            return mid;
        }
        if(mid*mid>x){
            j=mid-1;
        }
        else{
            j=mid+1;
        }
     return 1;   
    }
} 
var mySqrt = function(x) {
    return squrtfun(x);
};

console.log(mySqrt(8));