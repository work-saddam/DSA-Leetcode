// 234. Palindrome Linked List
// Leetcode: https://leetcode.com/problems/palindrome-linked-list/description/

// Approach1:-
// 1. Find the middle.
// 2. Reverse the 2nd half of the linked list.
// 3. Put two pointers, start(at start) & end(at mid) then check 1 by 1.

var isPalindrome = function (head) {
  //find the middle of linked list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow;

  //reverse the second half of the linked list
  let curr = mid;
  let prev = null;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  //now prev is the Linked List head
  //check the palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList !== null) {
    if (firstList.val !== secondList.val) return false;
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};
// Time Complexity - O(n)
// Space Complexity - O(1)

// Approach2: convert into array and check array is palindrome
// var isPalindrome = function(head) {
//     let arr = []
//     let curr = head
//     while(curr!==null){
//         arr.push(curr.val)
//         curr = curr.next
//     }

//     let n=arr.length
//     let mid = Math.floor(arr.length)
//     for(let i=0;i<mid;i++){
//         if(arr[i] !== arr[n-1-i]) return false
//     }
//     return true
// };
// Time Complexity - O(n)
// Space Complexity - O(n)
