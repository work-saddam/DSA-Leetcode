// 268. Missing Number
// Leetcode: https://leetcode.com/problems/missing-number/description/

/** *
 *  @description
 Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 */

//Solution:-----------------------------------------------

function missingNumber(nums) {
  // As we know sum of n natural number is n(n+1)/2

  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let arraySum = 0;
  for (let i = 0; i < n; i++) {
    arraySum = arraySum + nums[i];
  }
  return totalSum - arraySum;
}

// Approach 2: Using XOR
// a ^ a = 0, a ^ 0 = a
// XOR indices (0 to n) with array elements.
// Matching numbers cancel out, leaving the missing number.
var missingNumber = function(nums) {
    let ans = nums.length
    for(let i=0;i<nums.length;i++){
        ans = ans^i
        ans = ans^nums[i]
    }
    return ans
};
// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
