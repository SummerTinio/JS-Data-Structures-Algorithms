const { DoublyLinkedList } = require('../../doubly-linked-list');
const { forwardTraversal, backwardTraversal } = require('../../helpers/traversal');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('unshift() method', () => {
  it('returns a list instance', () => {
    const pushedList = list.unshift('yay');
    expect(pushedList instanceof DoublyLinkedList).toBe(true);
  });

  describe('handles 2 List Appending Cases ( <1 node, >=1 node )', () => {
    describe('handles edge case: <1 node DLL (Empty List)', () => {
      beforeEach(() => {
        list.unshift('lone item');
      });

      it('correctly sets value on head & tail', () => {
        expect(list.head.val).toBe('lone item');
        expect(list.tail.val).toBe('lone item');
      });

      it('correctly sets both .prev and .next pointers on lone node', () => {
        expect(list.head.prev).toBe(null);
        expect(list.head.next).toBe(null);
        expect(list.tail.prev).toBe(null);
        expect(list.tail.next).toBe(null);
      });

      it('increments length accordingly', () => {
        expect(list.length).toBe(1);
      });
    });

    describe('handles typical case: >=1 node DLL', () => {
      describe('handles typical case: 1 node DLL', () => {
        beforeEach(() => {
          list.unshift('item one of 2');
          list.unshift('item two of 2');
        });

        it('correctly sets head & tail on resulting list', () => {
          expect(list.head.val).toBe('item two of 2');
          expect(list.tail.val).toBe('item one of 2');
        });

        it('correctly sets .prev and .next pointers on each node', () => {
          expect(list.head.prev).toBe(null);
          expect(list.head.next.val).toBe('item one of 2');
          expect(list.tail.prev.val).toBe('item two of 2');
          expect(list.tail.next).toBe(null);
        });

        it('increments length accordingly', () => {
          expect(list.length).toBe(2);
        });
      });

      describe('handles typical case: >1 node DLL', () => {
        beforeEach(() => {
          list.unshift('A');
          list.unshift('B');
          list.unshift('C');          
        });

        it('correctly sets head & tail on resulting list', () => {
          // test labels (i.e. 'head,' 'tail)
          expect(list.head.val).toBe('C');
          expect(list.tail.val).toBe('A');
        });

        it('increments length accordingly', () => {
          // test the length
          expect(list.length).toBe(3);
        });
        
        it('correctly sets .prev & .next pointers on each node', () => {
          // test the links (i.e. pointers / .prev .next)
          expect(list.head.prev).toBe(null);
          expect(list.head.next.val).toBe('B');
          expect(list.head.next.next.val).toBe('A');
          expect(list.tail.prev.val).toBe('B');
          expect(list.tail.next).toBe(null);
          expect(forwardTraversal(list.head)).toBe(list.tail);
          expect(backwardTraversal(list.tail)).toBe(list.head);
        });
      });
    });
  }); 
});
