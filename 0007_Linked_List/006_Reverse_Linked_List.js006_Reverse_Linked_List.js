// 206. Reverse Linked List
// Leetcode: https://leetcode.com/problems/reverse-linked-list/description/

//Recursive Approach
//Time: O(n)
//Space: O(n)
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

//Iterative Approach
// Time: O(n)
// Space: O(1)
// var reverseList = function(head) {
//     let prev = null
//     let curr = head
//     while(curr !== null){
//         let nextTemp = curr.next
//         curr.next = prev
//         prev = curr
//         curr = nextTemp
//     }
//     return prev
// };
