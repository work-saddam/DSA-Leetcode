/**
Recursion:- Function calls itself to solve a smaller version of the same problem.

Two parts of Recursion:
Base Case:- stop condition (when to stop calling)
Recursive Case:- part where function call itself

 Real like Example: 
Queue of people - recursively finding how many people in the queue
Comment Thread  
Organisational Hierarchies

** Always make sure, Base case(where to stop function) should be written first**
*/

// Code Example:

// 1. This create the infinite loop.
function fun() {
  console.log("fun");
  fun();
}
// fun();

//  2. Q. Print from n to 1 using recursion
function fun(num) {
  if (num === 0) return; //Base Case

  console.log(num);
  num = num - 1;
  fun(num); //Recursive Case
}
fun(5);

// Q. Print from 1 to n using recursion.

function print(n){
 if(n<1) return n 
 print(n-1)
 console.log(n)
}
print(5)

// function print(num, curr = 1) {
//   if (curr > num) return;
//   console.log(curr);
//   print(num, ++curr);
// }
// print(10);
