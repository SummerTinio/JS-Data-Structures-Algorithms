const { SinglyLinkedList } = require('../../singly-linked-list');

let list;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('shift method', () => {
  it('handles edge case: <1 node (Empty SLL)', () => {
    expect(list.shift()).toBe(-1);
  });

  it('handles edge case: 1 node SLL', () => {
    list.push('lone node');
    // test removedNode
    const removedNode = list.shift();
      // links
    expect(removedNode.next).toBe(null);
      // value
    expect(removedNode.val).toBe('lone node');
    // test actual list
      // length
    expect(list.length).toBe(0);
      // labels
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('handles typical case: >1 node SLL', () => {
    list.push('A');
    list.push('B');
    list.push('C');
    // test removedNode
    const removedNode = list.shift();
      // links
    expect(removedNode.next).toBe(null);
      // value
    expect(removedNode.val).toBe('A');
    // test list itself
      // length
    expect(list.length).toBe(2);
      // labels (head/tail)
    expect(list.head.val).toBe('B');
    expect(list.tail.val).toBe('C');
  });
});