// 19. Remove Nth Node From End of List
// Leetcode: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(0, head);
  let first = sentinel;
  let second = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;

  return sentinel.next;
};
