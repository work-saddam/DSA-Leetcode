// 283: Move Zeroes

// Leetcode: https://leetcode.com/problems/move-zeroes/description/

/** * @description
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 * */

//Solution:-----------------------------------------------

// Without swapping
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (let j = x; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]
console.log(moveZeroes([0])); //[0]


// With swapping
// var moveZeroes = function (nums) {
//     let x = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             let temp = nums[i]
//             nums[i] = nums[x]
//             nums[x] = temp
//             x++
//         }
//     }
//     return nums
// }
