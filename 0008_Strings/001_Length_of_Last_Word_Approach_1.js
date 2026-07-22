// 58.Length of Last Word
// Leetcode: https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] !== " ") {
      break;
    }
    n--;
  }

  let count = 0;
  while (n >= 0) {
    if (s[n] === " ") break;

    count++;
    n--;
  }
  return count;
};
// Time Complexity - O(n)
// Space Complexity - 1
