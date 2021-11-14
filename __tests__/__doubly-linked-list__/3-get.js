const { DLLNode, DoublyLinkedList } = require('../../doubly-linked-list');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('get method', () => {
  it('returns a DLL Node instance', () => {
    list.push('yay');
    const newList = list.get(0);
    expect(newList instanceof DLLNode).toBe(true);
  });

  describe('handles invalid arguments:', () => {
    it('throws an error upon receving a string', () => {
      // must wrap in callback to test thrown error, else test doesn't work
      expect(() => {list.get('not a number')}).toThrow();
    });
    
    it('throws an error upon receiving a non-integer', () => {
      expect(() => {list.get(1.3)}).toThrow();
    });
  });
  
  describe('handles edge case: invalid index:', () => {
    it('negative indices', () => {
      expect(list.get(-1)).toBe(-1);
    });
    
    it('out-of-bounds indices', () => {
      expect(list.get(list.length)).toBe(-1);
      expect(list.get(list.length + 4)).toBe(-1);
    });
  });

  it('handles edge case: <1 node SLL (Empty List)', () => {
    expect(list.get(0)).toBe(-1);
  });
  
  it('handles edge case: 1 node SLL', () => {
    list.push('lone node');
    expect(list.get(0).val).toBe('lone node');
    expect(list.head.val === list.tail.val).toBe(true);
  });

  describe('handles typical case: >1 node SLL', () => {
    beforeEach(() => {
      list.push('A');
      list.push('B');
      list.push('C');
      list.push('D');
    });

    it('gets the correct value accdg to index', () => {
      expect(list.get(2).val).toBe('C');
      expect(list.get(3).val).toBe('D');
      expect(list.get(4)).toBe(-1);
    })
  });
});