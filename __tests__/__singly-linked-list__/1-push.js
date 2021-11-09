const { SinglyLinkedList } = require('../../singly-linked-list');

let list;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('push method', () => {
  it('handles edge case: <1 node SLL (Empty List)', () => {
    list.push('lone item');
    expect(list.head.val).toBe('lone item');
    expect(list.tail.val).toBe('lone item');
    expect(list.length).toBe(1);
  });
  
  it('handles edge case: 1 node SLL', () => {
    list.push('item 1 of 2');
    list.push('item 2 of 2');
    expect(list.head.val).toBe('item 1 of 2');
    expect(list.tail.val).toBe('item 2 of 2');
    expect(list.head.next.val).toBe('item 2 of 2');
    expect(list.length).toBe(2);
  });
  
  it('handles typical case: >1 node SLL', () => {
    list.push('A');
    list.push('B');
    list.push('C');
    // test labels (i.e. 'head,' 'tail)
    expect(list.head.val).toBe('A');
    expect(list.tail.val).toBe('C');
    // test the links (i.e. pointers or .next)
    expect(list.head.next.val).toBe('B');
    // test the length
    expect(list.length).toBe(3);
  });
});
