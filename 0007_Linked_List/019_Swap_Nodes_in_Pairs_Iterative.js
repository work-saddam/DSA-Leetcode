// 24. Swap Nodes in Pairs
// Leetcode: https://leetcode.com/problems/swap-nodes-in-pairs/description/

// Approach (Iterative):
// 1. Use dummy node before the head to handle edge case
// 2. Use pointer to swap pairs by rewiring node connection
// 3. Iterate through the list two nodes at a time and swap them.

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let sentinel = new ListNode(0, head);

  let prev = sentinel;
  let curr = head;
  let next = curr.next;

  while (curr && next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = prev.next;
    next = curr ? curr.next : null;
  }
  return sentinel.next;
};

// Time Complexity = O(n)
// Space Complexity = O(1)
