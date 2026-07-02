// 160. Intersection of Two Linked Lists
// Leetcode: https://leetcode.com/problems/intersection-of-two-linked-lists/description/

//Approach 1: 1.Traverse both lists
// 2.When a pointer hits null → jump to the other list
// 3.Eventually they align and meet at intersection
var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
//Time: O(N + M)
// Space: O(1)

//  Approach 2:-  1. move all node of list B into set.
//   2. Check from list A whether the node present in the set.

// var getIntersectionNode = function (headA, headB) {
//     let setB = new Set()
//     while (headB !== null) {
//         setB.add(headB)
//         headB = headB.next
//     }

//     while (headA !== null) {
//         if (setB.has(headA)) return headA
//         headA = headA.next
//     }
//     return null
// };

// Time: O(N + M)
// Space: O(M)
