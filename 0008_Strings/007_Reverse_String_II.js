// 541. Reverse String II
// Leetcode: https://leetcode.com/problems/reverse-string-ii/

//Approach 1
var reverseStr = function (s, k) {
  let arr = s.split("");

  function reverse(l, r) {
    while (l < r) {
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }

  for (let i = 0; i < arr.length; i += 2 * k) {
    reverse(i, Math.min(i + k - 1, arr.length - 1));
  }
  return arr.join("");
};
// Time Complexity - O(n)
// Space Complexity	- O(n)
