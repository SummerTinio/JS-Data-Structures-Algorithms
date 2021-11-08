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

  isEmpty() {
    return this.head === null;
  }
}

module.exports = {
  SLLNode,
  SinglyLinkedList,
}