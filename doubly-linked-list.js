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
}

module.exports = {
  DLLNode,
  DoublyLinkedList,
}