const { SinglyLinkedList } = require('../../singly-linked-list');

let list;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('unshift method', () => {
  it('handles edge case: <1 node (Empty List)', () => {
    list.unshift('lone node');
    // list itself
    expect(list.head.val).toBe('lone node');
    expect(list.length).toBe(1);
    // lone node
      // links
    expect(list.head.next).toBe(null);
  });

  it('handles edge case: 1 node SLL', () => {
    list.unshift('B');
    list.unshift('A');
    // list itself
      // length
      expect(list.length).toBe(2);
      // labels
      expect(list.head.val).toBe('A');
      expect(list.tail.val).toBe('B');
  });
  
  it('handles typical case: >1 node SLL', () => {
    list.unshift('C');
    list.unshift('B');
    list.unshift('A');
    // list itself
      // length
    expect(list.length).toBe(3);
      // labels
    expect(list.head.val).toBe('A');
    expect(list.tail.val).toBe('C');
  });
});