// 203. Remove Linked List Elements
// Leetcode: https://leetcode.com/problems/remove-linked-list-elements/description/

//Approach 1: using sentinel Node
// A sentinel node is a fake node placed before the head.
// Traverse while prev.next exists,
// If it matches, skip it (prev.next = prev.next.next), else move prev forward.
var removeElements = function (head, val) {
  const sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;

  while (prev !== null && prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
};
// Time: O(n)
// Space: O(1)

//Approach 2:
var removeElements = function (head, val) {
  if (head === null) return head;

  let newHead = head;
  while (newHead !== null && newHead.val === val) {
    newHead = newHead.next;
  }
  let curr = newHead;
  while (curr !== null && curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return newHead;
};
