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
  
  isEmpty() {
    return this.head === null;
  }
}

module.exports = {
  SLLNode,
  SinglyLinkedList,
}
/** 
 * 
 if (idx === 0 && this.isEmpty()) {
   return this.push(val);
   
   // this.head = this.tail = new SLLNode(val);
   // this.length++;
   // return this;
   
  } else if (idx === 0 && !this.isEmpty()) {
    return this.unshift(val);
    
    // .push and .unshift already return the list instance
    // const newHead = new SLLNode(val);
    // newHead.next = this.head;
    // this.head = newHead;
    // this.length++;
    // return this;
  }
  * 
  */
/** 
 * 
 insert(idx, val) {
   if (!Number.isSafeInteger(idx)) {
     throw new Error('Invalid index');
   }

   if (this.isEmpty() && idx === 0) {
     this.head = this.tail = new SLLNode(val);
     this.length++;
     return this;
   } else if (idx === 0) {
     const newHead = new SLLNode(val);
     newHead.next = this.head;
     this.head = newHead;
     this.length++;
     return this;
   }

   if (idx < 0 || idx >= this.length) {
     return -1;
   }

   let count = idx;
   let trav = this.head;
   while (count > 0) {
     trav = trav.next;
     count--;
   }
   const insertedNode = new SLLNode(val);
   insertedNode.next = trav.next;
   trav.next = insertedNode;
   this.length++;
   return this;
 }
 */

/** 
 * implementation below fails the ff. test
 * 
  insert method › given an index within bounds, handles typical case (a >1 node SLL) › inserts a new node to the correct position     

  expect(received).toBe(expected) // Object.is equality

  Expected: "new value"
  Received: "B"
 * 
 * 
 insert(idx, val) {
   if (!Number.isSafeInteger(idx)) {
     throw new Error('Invalid index');
   }

   if (!this.isEmpty() && idx === this.length) {
     return -1;
   } 

   if (idx < 0 || idx > this.length) {
     return -1;

   } else if (idx === 0) {
     return this.unshift(val);
   
   } else if (idx === this.length - 1) {
     return this.push(val);
   
   } else {
     const prev = this.get(idx - 1);
     const after = prev.next;

     const insertedNode = new SLLNode(val);
     
     prev.next = insertedNode;
     insertedNode.next = after;
     this.length++;
     return this;
   }
  }
 * 
 */