// 141. Linked List Cycle
// Leetcode: https://leetcode.com/problems/linked-list-cycle/description/

var hasCycle = function (head) {
  let curr = head;
  let seen = new Set();
  while (curr !== null) {
    if (seen.has(curr)) {
      return true;
    }
    seen.add(curr);
    curr = curr.next;
  }
  return false;
};
// Time Complexity - O(n)
// Space Complexity - O(n)
