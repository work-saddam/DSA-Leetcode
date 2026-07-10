// 61. Rotate List
// Leetcode: https://leetcode.com/problems/rotate-list/description/

// Approach:
// 1. Compute the length of the list.
// 2. Adjust k using k=k%length
// 3. Use two pointer: move one k steps ahead, then move both until the first reaches the end.
// 4. Rewire the pointers to rotate the list, break it at a new tail.

var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  //calculate the length
  let count = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    count++;
  }

  // to avoid unnecessary rotation
  k = k % count;
  if (k === 0) return head;

  //find the index where new list start
  let s = head;
  let f = head;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  while (f.next) {
    s = s.next;
    f = f.next;
  }
  f.next = head; //attach the head

  let newHead = s.next;
  s.next = null; //make tail by pointing null

  return newHead;
};

// Time Complexity = O(n)
// Space Complexity = O(1)
