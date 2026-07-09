// 2.Add Two Numbers
// Leetcode: https://leetcode.com/problems/add-two-numbers/description/

var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode(0, null);
  let curr = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    curr.next = new ListNode(digit, null);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return ans.next;
};

//Time Complexity: O(max(m, n)) because,
//each node of both linked lists is processed exactly once.

// Space Complexity: O(max(m, n)) for the newly created result linked list.
// The auxiliary space used by the algorithm itself is O(1).
