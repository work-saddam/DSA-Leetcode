// 707. Design Linked List
// Leetcode: https://leetcode.com/problems/design-linked-list/description/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    return;
  }
  let newNode = new Node(val);
  if (index === 0) {
    // return this.addAtHead(val)

    newNode.next = this.head;
    this.head = newNode;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

const list = new MyLinkedList();
console.log(list);

list.addAtHead(2); // [2]
list.addAtTail(4); // [2 → 4]
list.addAtIndex(1, 3); // [2 → 3 → 4]
console.log(list);

console.log(list.get(1)); // 3

list.deleteAtIndex(1); // remove 3
console.log(list);

console.log(list.get(1)); // 4
