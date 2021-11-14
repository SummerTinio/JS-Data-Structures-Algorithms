const { DLLNode, DoublyLinkedList } = require("../../doubly-linked-list");

/**
 * note: do NOT reuse this instance
 * for the rest of the tests
 *  */ 
let list = new DoublyLinkedList();

it('correctly initializes an empty DLL', () => {
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
  expect(list.length).toBe(0);
});

it('correctly initializes an empty DLLNode', () => {
  const node = new DLLNode('yay');
  expect(node.prev).toBe(null);
  expect(node.next).toBe(null);
  expect(node.val).toBe('yay');
});