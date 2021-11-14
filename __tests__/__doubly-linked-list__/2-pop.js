const { DLLNode, DoublyLinkedList } = require('../../doubly-linked-list');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('pop method', () => {
  it('returns a DLL Node instance', () => {
    list.push('A');
    const popped = list.pop();
    expect(popped instanceof DLLNode).toBe(true);
  });

  it('handles edge case: <1 node (Empty List)', () => {
    expect(list.pop()).toBe(-1);
  });
  
  it('handles edge case: 1 node SLL', () => {
    list.push('lone node');
    // test removed node
    const loneNode = list.pop();
    expect(loneNode.val).toBe('lone node');
    expect(loneNode.prev).toBe(null);
    expect(loneNode.next).toBe(null);
    // test actual list
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
  
  describe('handles typical case: >1 node SLL', () => {
    beforeEach(() => {
      list.push('A');
      list.push('B');
      list.push('C');
    });
    
    it('LIST: correctly sets head & tail on resulting list', () => {
      list.pop();
      expect(list.head.val).toBe('A');
      expect(list.tail.val).toBe('B');
    });
    
    it('LIST: decrements length accordingly', () => {
      list.pop();
      expect(list.length).toBe(2);
    });
    
    it('NODE: removes the correct node (i.e. the last one)', () => {
      // test removed node
      const poppedNode = list.pop();
      expect(poppedNode.val).toBe('C');
    });
    
    it('NODE: severs links on popped node .prev and .next', () => {
      const poppedNode = list.pop();
      expect(poppedNode.prev).toBe(null);
      expect(poppedNode.next).toBe(null);
    });
  });
});
