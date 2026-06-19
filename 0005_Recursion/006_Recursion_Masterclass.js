// 509. Fibonacci Number
// Leetcode: http://leetcode.com/problems/fibonacci-number/description/

/**
 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 */

// Recursive approach
var fib1 = function (n) {
  if (n <= 1) return n;
  return fib1(n - 1) + fib1(n - 2);
};
// Time Complexity: O(2ⁿ)   -> very bad
// Space Complexity: O(n)   -> Due to recursion stack depth

// Iterative approach
var fib2 = function (n) {
 if(n<=1) return n
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let res = a + b;
    a = b;
    b = res;
  }
  return b;
};
// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(fib1(6));
console.log(fib2(6));

// print fibonacci series for n number (Iterative approach)
// var fibSeries = function (n) {
//   const res = [];
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < n; i++) {
//     res.push(a);
//     let temp = a;
//     a = b;
//     b = temp + b;
//   }
//   return res;
// };

// print fibonacci series for n number (Recursive approach)
// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// function fibSeries(n) {
//   const res = [];
//   for (let i = 0; i < n; i++) {
//     res.push(fib(i));
//   }
//   return res;
// }

// console.log(fibSeries(5));
