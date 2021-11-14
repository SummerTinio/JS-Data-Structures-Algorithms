const { DLLNode, DoublyLinkedList } = require('../../doubly-linked-list');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('shift method', () => {
  it('returns a DLL Node instance', () => {
    list.push('A');
    const shifted = list.shift();
    expect(shifted instanceof DLLNode).toBe(true);
  });

  it('handles edge case: <1 node (Empty List)', () => {
    expect(list.shift()).toBe(-1);
  });
  
  it('handles edge case: 1 node SLL', () => {
    list.push('lone node');
    // test removed node
    const loneNode = list.shift();
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
      list.shift();
      expect(list.head.val).toBe('B');
      expect(list.tail.val).toBe('C');
    });
    
    it('LIST: decrements length accordingly', () => {
      list.shift();
      expect(list.length).toBe(2);
    });
    
    it('NODE: removes the correct node (i.e. the first one)', () => {
      // test removed node
      const shiftedNode = list.shift();
      expect(shiftedNode.val).toBe('A');
    });
    
    it('NODE: severs links on shifted node .prev and .next', () => {
      const shiftedNode = list.shift();
      expect(shiftedNode.prev).toBe(null);
      expect(shiftedNode.next).toBe(null);
    });
  });
});
