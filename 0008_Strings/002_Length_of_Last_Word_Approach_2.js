// 58.Length of Last Word
// Leetcode: https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (s[i] === " " && count > 0) {
      break;
    }
  }
  return count;
};
// Time Complexity - O(n)
// Space Complexity - 1
