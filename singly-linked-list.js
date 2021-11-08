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

  isEmpty() {
    return this.head === null;
  }
}

module.exports = {
  SLLNode,
  SinglyLinkedList,
}