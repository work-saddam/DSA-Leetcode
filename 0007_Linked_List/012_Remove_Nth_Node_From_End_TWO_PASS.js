// 19. Remove Nth Node From End of List
// Leetcode: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

//Approach:
// 1. add the  sentinel(dummy) node.
// 2. calculate the total length.
// 3. Find the previous node of the one to be deleted using length-n.
// 4. now point the previous node to the prev.next.next.

var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(0, head);

  let curr = head;
  let count = 0;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }

  let position = count - n;
  curr = sentinel;
  for (let i = 0; i < position; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return sentinel.next;
};
// Time: O(n)
// Space: O(1)
