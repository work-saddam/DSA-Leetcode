// 1221. Split a String in Balanced Strings
// Leetcode: https://leetcode.com/problems/split-a-string-in-balanced-strings/

//  Approach 1
// var balancedStringSplit = function (s) {
//     let maxBalancedString = 0
//     let r = 0
//     let l = 0

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'R') {
//             r++
//         } else {
//             l++
//         }

//         if (l === r) {
//             maxBalancedString++
//             r = 0
//             l = 0
//         }
//     }
//     return maxBalancedString
// };
// Time Complexity = O(n)
// Space Complexity = O(1)

//  Approach 2: little optimised
var balancedStringSplit = function (s) {
  let maxBalancedString = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }

    if (temp === 0) {
      maxBalancedString++;
    }
  }
  return maxBalancedString;
};
// Time Complexity = O(n)
// Space Complexity = O(1)
