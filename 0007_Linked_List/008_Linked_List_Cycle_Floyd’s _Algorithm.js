// 141. Linked List Cycle
// Leetcode: https://leetcode.com/problems/linked-list-cycle/description/

// Floyd’s Algorithm approach
// It uses slow & fast pointers.
// If there's a cycle → they will eventually meet.
// Or they do not meet then it's a singly linked list.

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};
// Time Complexity - O(n)
// Space Complexity - O(1)
