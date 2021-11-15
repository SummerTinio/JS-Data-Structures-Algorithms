const { DoublyLinkedList } = require('../../doubly-linked-list');
const { forwardTraversal, backwardTraversal } = require('../../helpers/traversal');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('push() method', () => {
  it('returns a list instance', () => {
    const pushedList = list.push('yay');
    expect(pushedList instanceof DoublyLinkedList).toBe(true);
  });
  
  describe('handles 2 List Appending Cases ( <1 node, >=1 node )', () => {
    describe('handles edge case: <1 node DLL (Empty List)', () => {
      beforeEach(() => {
        list.push('lone item');
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
          list.push('item 1 of 2');
          list.push('item 2 of 2');
        });

        it('correctly sets head & tail on resulting list', () => {
          expect(list.head.val).toBe('item 1 of 2');
          expect(list.tail.val).toBe('item 2 of 2');
        });

        it('correctly sets .prev and .next pointers on each node', () => {
          expect(list.head.prev).toBe(null);
          expect(list.head.next.val).toBe('item 2 of 2');
          expect(list.tail.prev.val).toBe('item 1 of 2');
          expect(list.tail.next).toBe(null);
        });

        it('increments length accordingly', () => {
          expect(list.length).toBe(2);
        });
      });

      describe('handles typical case: >1 node DLL', () => {
        beforeEach(() => {
          list.push('A');
          list.push('B');
          list.push('C');          
        });

        it('correctly sets head & tail on resulting list', () => {
          // test labels (i.e. 'head,' 'tail)
          expect(list.head.val).toBe('A');
          expect(list.tail.val).toBe('C');
        });

        it('increments length accordingly', () => {
          // test the length
          expect(list.length).toBe(3);
        });
        
        it('correctly sets .prev & .next pointers on each node', () => {
          // test the links (i.e. pointers / .prev .next)
          expect(list.head.prev).toBe(null);
          expect(list.head.next.val).toBe('B');
          expect(list.head.next.next.val).toBe('C');
          expect(list.tail.prev.val).toBe('B');
          expect(list.tail.next).toBe(null);
          expect(forwardTraversal(list.head)).toBe(list.tail);
          expect(backwardTraversal(list.tail)).toBe(list.head);
        });
      });
    });
  }); 
});
