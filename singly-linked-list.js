class SLLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (this.isEmpty()) {
      this.head = this.tail = new SLLNode(val);
    } else {
      this.tail = this.tail.next = new SLLNode(val);
    }
    this.length++;
    return this;
  }

  unshift(val) {
    if (this.isEmpty()) {
      this.head = this.tail = new SLLNode(val);
    } else {
      let newFirstNode = new SLLNode(val);
      newFirstNode.next = this.head;
      this.head = newFirstNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;

    } else if (this.length === 1) {
      const loneNode = this.head;
      this.head = this.tail = null;
      this.length--;
      return loneNode;

    } else {
      const lastNode = this.tail;
      let secondToLast = this.head;
      while (secondToLast.next && secondToLast.next.next) {
        secondToLast = secondToLast.next;
      }
      this.tail = secondToLast;
      this.length--;
      return lastNode;
    }
  }

  shift() {
    if (this.isEmpty()) {
      return -1;

    } else if (this.length === 1) {
      const loneNode = this.head;
      loneNode.next = null;
      this.head = this.tail = null;
      this.length--;
      return loneNode;

    } else {
      const firstNode = this.head;
      this.head = this.head.next;
      firstNode.next = null;
      this.length--;
      return firstNode;
    }
  }

  isEmpty() {
    return this.head === null;
  }
}

module.exports = {
  SLLNode,
  SinglyLinkedList,
}