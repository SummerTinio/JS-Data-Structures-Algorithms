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

  get(idx) {
    if (!Number.isSafeInteger(idx)) {
      throw new Error('Invalid index');
    }

    if (idx < 0 || idx >= this.length) {
      return -1;
    }

    if (!this.head) {
      return -1;
    } else if (!this.head.next) {
      return this.head;
    }

    // start at first position (head / 0)
    if (idx <= this.length / 2) {
      let stepsLeft = idx;
      let trav = this.head;
      
      while (stepsLeft !== 0) {
        trav = trav.next;
        stepsLeft--;
      }
      return trav;
  
    // start at last position (tail / this.length - 1)
    } else if (idx > this.length / 2) {
      let stepsLeft = this.length - 1;
      let trav = this.tail;

      while (stepsLeft !== idx) {
        trav = trav.prev;
        stepsLeft--;
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

    if (!this.head) {
      return -1;
    } else if (!this.head.next) {
      this.head.val = val;
      return this;
    } else {
      if (idx <= this.length / 2) {
        let trav = this.head;
        let stepsLeft = idx;
  
        while (stepsLeft !== 0) {
          trav = trav.next;
          stepsLeft--;
        }
        trav.val = val;
        return this;
      } else if (idx > this.length / 2) {
        let trav = this.tail;
        let stepsLeft = this.length - 1;
        
        while (stepsLeft !== idx) {
          trav = trav.prev;
          stepsLeft--;
        }
        trav.val = val;
        return this;
      }
    }

  }
}

module.exports = {
  DLLNode,
  DoublyLinkedList,
}