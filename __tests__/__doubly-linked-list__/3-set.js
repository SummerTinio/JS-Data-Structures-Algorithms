const { DoublyLinkedList } = require('../../doubly-linked-list');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('set method', () => {
  it('returns a list instance', () => {
    list.push('yay');
    const newList = list.set(0, 'new');
    expect(newList instanceof DoublyLinkedList).toBe(true);
  });

  describe('handles invalid arguments:', () => {
    it('throws an error upon receving a string', () => {
      // must wrap in callback to test thrown error, else test doesn't work
      expect(() => {list.set('not a number', 'any val')}).toThrow();
    });
    
    it('throws an error upon receiving a non-integer', () => {
      expect(() => {list.set(1.3, 'any val')}).toThrow();
    });
  });
  
  describe('handles edge case: invalid index:', () => {
    it('negative indices', () => {
      expect(list.set(-1, 'any val')).toBe(-1);
    });
    
    it('out-of-bounds indices', () => {
      expect(list.set(list.length, 'any val')).toBe(-1);
      expect(list.set(list.length + 4, 'any val')).toBe(-1);
    });
  });

  it('handles edge case: <1 node SLL (Empty List)', () => {
    expect(list.set(0, 'any val')).toBe(-1);
  });
  
  it('handles edge case: 1 node SLL', () => {
    list.push('lone node');
    expect(list.set(0, 'any val').head.val).toBe('any val');
    expect(list.head.val).toBe('any val');
    expect(list.tail.val).toBe('any val');
    expect(list.head.prev).toBe(null);
    expect(list.head.next).toBe(null);
    expect(list.tail.prev).toBe(null);
    expect(list.tail.next).toBe(null);
  });

  describe('handles typical case: >1 node SLL', () => {
    beforeEach(() => {
      list.push('A');
      list.push('B');
      list.push('C');
      list.push('D');
    });
    
    it('sets value correctly on chosen node', () => {
      expect(list.get(2).val).toBe('C');
      list.set(2, 'any val1');
      expect(list.get(2).val).toBe('any val1');
  
      expect(list.get(3).val).toBe('D');
      list.set(3, 'any val2');
      expect(list.get(3).val).toBe('any val2');
      expect(list.set(4, 'any val3')).toBe(-1);
    });

    it('leaves .next and .prev pointers as is on the set node', () => {
      const oldPrev = list.get(2).prev;
      const oldNext = list.get(2).next;
      expect(list.get(2).val).toBe('C');
      list.set(2, 'any val1');
      
      const newPrev = list.get(2).prev;
      const newNext = list.get(2).next;
      expect(oldPrev).toBe(newPrev);
      expect(oldNext).toBe(newNext);
    });
  });
});