// 876. Middle of the Linked List
// Leetcode: https://leetcode.com/problems/middle-of-the-linked-list/description/

// Using fast pointer & slow pointer
//Time: O(n)
//Space: O(1)
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
