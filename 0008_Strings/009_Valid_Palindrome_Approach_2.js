// 125. Valid Palindrome
// Leetcode: https://leetcode.com/problems/valid-palindrome/

//Approach 2:
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  const regex = /[A-Za-z0-9]/;

  while (l < r) {
    while (l < r && !regex.test(s[l])) l++;
    while (l < r && !regex.test(s[r])) r--;

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

    l++;
    r--;
  }
  return true;
};
// Time Complexity - O(n)
// Space Complexity - O(1)

//regex.test(str) → Regex method that returns true/false to check if a pattern matches.
//str.match(regex) → String method that returns the matched text (array) or null.
