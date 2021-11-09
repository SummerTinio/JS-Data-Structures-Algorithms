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
      const newFirstNode = new SLLNode(val);
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

  get(idx) {
    if (!Number.isSafeInteger(idx)) {
      throw new Error('Invalid index');
    }

    if (idx < 0 || idx >= this.length) {
      return -1;
    }

    if (this.isEmpty()) {
      return -1;
    } else if (this.length === 1) {
      return this.head;
    } else {
      let trav = this.head;
      let count = idx;
      while (count > 0) {
        trav = trav.next;
        count--;
      }
      return trav;
    }
    
  }
  
  set(idx, val) {
    if (!Number.isSafeInteger(idx)) {
      throw new Error('Invalid index');
    }

    if (idx < 0 || idx >= this.length) {
      return -1;
    }

    const nodeToSet = this.get(idx);
    if (nodeToSet) {
      nodeToSet.val = val;
    } else {
      return -1;
    }
    return this;
  }
  
  insert(idx, val) {
    if (!Number.isSafeInteger(idx)){
      throw new Error('Invalid index');
    }
    
    if (idx === 0) {
      // O(1) if empty list
      // also O(1) if list is not empty
      // all u need is a pointer to the head
      return this.unshift(val);
    }
    
    if (idx < 0 || idx >= this.length) {
      return -1;
    }
    const insertionPoint = this.get(idx - 1);
    const newNode = new SLLNode(val);
    newNode.next = insertionPoint.next;
    insertionPoint.next = newNode;
    this.length++;
    return this;
  }

  remove(idx) {
    if (!Number.isSafeInteger(idx)) {
      throw new Error('Invalid index');
    }

    if (idx < 0 || idx >= this.length) {
      return -1;
    }

    if (idx === 0 || idx === this.length - 1) {
      return this.shift();
    }

    const removalPoint = this.get(idx - 1);
    const deleted = removalPoint.next;
    removalPoint.next = deleted.next;

    this.length--;

    deleted.next = null;
    return deleted;
  }
  
  isEmpty() {
    return this.head === null;
  }
}

module.exports = {
  SLLNode,
  SinglyLinkedList,
}