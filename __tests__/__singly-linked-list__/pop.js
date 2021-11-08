const { SinglyLinkedList } = require('../../singly-linked-list');

let list;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('pop method', () => {
  it('handles edge case: <1 node (Empty List)', () => {
    expect(list.pop()).toBe(-1);
  });
  
  it('handles edge case: 1 node SLL', () => {
    list.push('lone node');
    // test removed node
    const loneNode = list.pop();
    expect(loneNode.val).toBe('lone node');
    expect(loneNode.next).toBe(null);
    // test actual list
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
  
  it('handles typical case: >1 node SLL', () => {
    list.push('A');
    list.push('B');
    list.push('C');
    // test removed node
    const poppedNode = list.pop();
    expect(poppedNode.val).toBe('C');
    expect(poppedNode.next).toBe(null);
    // test actual list
    expect(list.length).toBe(2);
    expect(list.head.val).toBe('A');
    expect(list.tail.val).toBe('B');
  });
});
