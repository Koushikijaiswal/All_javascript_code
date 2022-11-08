/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 function longestcommon(i,j,text1,text2){
    if(i>=text1.length || j>=text2.length){
        return 0;
    }
         if(text1[i]===text2[j]){
             return 1+longestcommon(i+1,j+1,text1,text2);
         }
        let ans1=longestcommon(i+1,j,text1,text2);
        let ans2 =longestcommon(i,j+1,text1,text2);
    
        return Math.max(ans1,ans2);
    
    }
    
    var longestCommonSubsequence = function(text1, text2) {
       return longestcommon(0,0,text1,text2);
       
    };

    let text1="abcde", text2 = "ace";
    console.log(longestCommonSubsequence(text1,text2));


    /*
    Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations. */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 function combination(candidates,target,output,ans,i){
    if(target==0){
        output.push([...ans]);
         return;
    }

    if(i>=candidates.length){
        return;
    }
    if(candidates[i]<=target){
        combination(candidates,target-candidates[i],output,[...ans,candidates[i]],i);
    }
    combination(candidates,target,output,[...ans],i);
}

var combinationSum = function(candidates, target) {
    var output =[];
    combination(candidates,target,output,[],0);
    return output;
};