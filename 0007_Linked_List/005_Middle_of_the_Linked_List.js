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

//** Time complexity O(n) --> not good (Iterative Approach)
// var middleNode = function (head) {
//     let count = 0
//     let curr = head
//     while (curr !== null) {
//         curr = curr.next
//         count++
//     }
//     let mid = Math.floor(count / 2)
//     curr = head
//     for (let i = 0; i < mid; i++) {
//         curr = curr.next
//     }
//     return curr
// };
