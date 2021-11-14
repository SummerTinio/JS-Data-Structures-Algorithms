class DLLNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (!this.head) {
      this.head = this.tail = new DLLNode(val);
    } else {
      const newLastNode = new DLLNode(val);

      newLastNode.prev = this.tail;
      this.tail.next = newLastNode;

      this.tail = newLastNode;
    }  
    this.length++;
    return this;
  }
  
  unshift(val) {
    if (!this.head) {
      this.head = this.tail = new DLLNode(val);
    } else {
      const newFirstNode = new DLLNode(val);
      newFirstNode.next = this.head;
      this.head.prev = newFirstNode;
      this.head = newFirstNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return -1;
    } else if (!this.head.next) {
      const removedNode = this.head;
      this.head = this.tail = null;
      this.length--;
      return removedNode;
    } 

    const lastNode = this.tail;
    const secondToLast = lastNode.prev;
    secondToLast.next = null;

    this.tail = secondToLast;

    lastNode.next = lastNode.prev = null;
    this.length--;
    return lastNode;
  }

  shift() {
    if (!this.head) {
      return -1;

    } else if (!this.head.next) {
      const loneNode = this.head;
      this.head = this.tail = null;
      this.length--;
      return loneNode;
    }

    const removedHead = this.head;
    this.head = this.head.next;
    this.length--;

    removedHead.prev = removedHead.next = null;
    return removedHead;
  }
}

module.exports = {
  DLLNode,
  DoublyLinkedList,
}