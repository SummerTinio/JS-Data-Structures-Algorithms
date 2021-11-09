const { SinglyLinkedList } = require('../../singly-linked-list');

let list;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('get method', () => {
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
  });

  it('handles typical case: >1 node SLL', () => {
    list.push('A');
    list.push('B');
    list.push('C');
    list.push('D');
    expect(list.get(2).val).toBe('C');
    expect(list.get(3).val).toBe('D');
    expect(list.get(4)).toBe(-1);
  });
});