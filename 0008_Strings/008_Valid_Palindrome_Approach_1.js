// 125. Valid Palindrome
// Leetcode: https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let reverseString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/)) {
      filteredString = filteredString + s[i];
      reverseString = s[i] + reverseString;
    }
  }

  return reverseString === filteredString;
};

// Time Complexity - O(n)
// Space Complexity - O(n)

//regex.test(str) → Regex method that returns true/false to check if a pattern matches.
//str.match(regex) → String method that returns the matched text (array) or null.
