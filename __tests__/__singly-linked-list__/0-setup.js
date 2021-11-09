const { SinglyLinkedList } = require("../../singly-linked-list");

/**
 * note: do NOT reuse this instance
 * for the rest of the tests
 *  */ 
let list = new SinglyLinkedList();

it('correctly initializes an empty SLL', () => {
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
  expect(list.length).toBe(0);
});