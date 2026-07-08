// 83. Remove Duplicates from Sorted List
// Leetcode: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

var deleteDuplicates = function (head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
// Time: O(n)
// Space: O(1)
