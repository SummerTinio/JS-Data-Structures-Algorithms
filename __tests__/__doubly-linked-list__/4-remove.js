const { DLLNode, DoublyLinkedList } = require('../../doubly-linked-list');
const { forwardTraversal, backwardTraversal } = require('../../helpers/traversal');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('remove method', () => {
  it('returns a DLL node instance', () => {
    list.push('lone node');
    const removedNode = list.remove(0);
    expect(removedNode instanceof DLLNode).toBe(true);
  });

  describe('handles invalid arguments:', () => {
    it('throws an error when passed a string as an index', () => {
      expect(() => { list.remove('invalid arg') }).toThrow();
      expect(() => { list.remove('0') }).toThrow();
    });

    it('throws an error when passed an object as an index', () => {
      expect(() => { list.remove({}) }).toThrow();
    });

    it('throws an error when passed a non-integer index', () => {
      expect(() => { list.remove(1.54) }).toThrow();
      expect(() => { list.remove(1 / 4) }).toThrow();
    });
  });

  describe('handles all invalid indices:', () => {
    test('returns -1 when passed a Negative Index', () => {
      expect(list.remove(-1)).toBe(-1);
    });

    test('returns -1 when passed an index Greater Than the list length', () => {
      expect(list.remove(20)).toBe(-1);
      list.push('A');
      expect(list.remove(2)).toBe(-1);
      list.push('B');
      list.push('C');
      expect(list.remove(3)).toBe(-1);
    })

    test('given a list WITH nodes, returns -1 when removeing to an index that is Equal to List length', () => {
      list.push('A');
      expect(list.remove(1)).toBe(-1);
      list.push('B');
      list.push('C');
      list.push('D');
      expect(list.remove(4)).toBe(-1);
      expect(list.length).toBe(4);
    });

    it('given an EMPTY list, returns -1 when removing index 0', () => {
      expect(list.length).toBe(0);
      expect(list.remove(0)).toBe(-1);
    });
  });

  describe('given a valid index, handles all 3 List Cases ( <1 node, 1 node, >1 node DLL )', () => {

    describe('handles all edge cases ( <1 node, 1 node ):', () => {
      /** 
       test('successfully removes node to a <1 node DLL (Empty List)', () => {
         list.remove(0, 'any value');
         expect(list.length).toBe(1);
         // list.remove(0, 'any value');
         // expect(list.head.val).toBe('any value');
       });  
       */

      /** 
       
       it('does not type coerce to number when passed a string (e.g. "0") as an index, instead throws an Error', () => {
         list.push('yay');
         list.push('yay');
         expect(() => {list.remove(`0`)}).toThrow();
         expect(() => {list.remove('0')}).toThrow();
         expect(() => {list.remove('1')}).toThrow();
       }); 

       */

      it('in a <1 node DLL (Empty List), returns -1 when asked to remove from index 0', () => {
        expect(list.remove(0)).toBe(-1);
      });

      describe('in a 1 node DLL, (1) removes node from correct position, (2) cleans its pointers before returning it, and (3) decrements SLL length accordingly', () => {
        let removedNode;

        beforeEach(() => {
          list.push('A');
          removedNode = list.remove(0);
        });

        describe('the Node itself (Value, Links/Pointers) was correctly removed,', () => {
          it('severs pointers/links on removed node,', () => {
            expect(removedNode.prev).toBe(null);
            expect(removedNode.next).toBe(null);
          });

          it('removes the node with the expected value,', () => {
            expect(removedNode.val).toBe('A');
          });
        });

        describe('the List itself is updated as expected (Length, Labels: head, tail)', () => {
          it('head and tail (Labels) are both set to null on removal of lone node', () => {
            expect(list.head).toBe(null);
            expect(list.tail).toBe(null);
          });

          it('decrements length upon successful removal', () => {
            expect(list.length).toBe(0);
          });
        });
      });
    });
  });

  describe('handles typical case ( >1 node DLL ):', () => {
    describe("list.remove() in a 2-item DLL", () => {
      test('LIST: removes node from the correct position', () => {
        list.push('A');
        list.push('B');
        expect(list.remove(1).val).toBe('B');
      });

      test('LIST: correctly updates head & tail', () => {
        list.push('A');
        list.push('B');
        list.remove(1);
        expect(list.head.val).toBe('A');
        expect(list.tail.val).toBe('A');
      });

      test('NODE: correctly sets .next & .prev pointers on each node remaining in list', () => {
        list.push('A');
        list.push('B');
        list.remove(1);
        expect(forwardTraversal(list.head)).toBe(list.tail);
        expect(backwardTraversal(list.tail)).toBe(list.head);
      });

      test('LIST: decrements length accordingly', () => {
        list.push('A');
        list.push('B');
        list.remove(1);
        expect(list.length).toBe(1);
      });

      test('NODE: severs links on / resets .prev and .next on removed node', () => {
        list.push('A');
        list.push('B');
        const removed = list.remove(1);
        expect(removed.next).toBe(null);
        expect(removed.prev).toBe(null);
      });
    });

    describe(`list.remove() in a 3-item DLL,`, () => {
      beforeEach(() => {
        list.push('A');
        list.push('B');
        list.push('C');
        list.remove(1);
      });

      it('LIST: decrements length upon removeion', () => {
        expect(list.length).toBe(2);
      });

      it('LIST: removes a new node to the correct position', () => {
        expect(list.head.next.val).toBe('C');

        list.remove(0);
        expect(list.head.val).toBe('C');
        expect(list.length).toBe(1);
      });

      it('LIST: sets head & tail accordingly', () => {
        expect(list.head.val).toBe('A');
        expect(list.tail.val).toBe('C');
      });

      it('NODE: sets .prev and .next pointers on each node accordingly', () => {
        expect(forwardTraversal(list.head)).toBe(list.tail);
        expect(backwardTraversal(list.tail)).toBe(list.head);
      });
    });

    describe('list.remove() on a 5-node DLL', () => {
      beforeEach(() => {
        list.push('A');
        list.push('B');
        list.push('C');
        list.push('D');
        list.push('E');
      });

      describe('handles edge case: removing node at first index (0)', () => {
        it('updates head upon removing from idx 0', () => {
          list.remove(0);
          expect(list.head.val).toBe('B');
        });

        it('correctly sets .prev & .next pointers on each node', () => {
          list.remove(0);
          expect(list.head.val).toBe('B');
          expect(list.tail.val).toBe('E');
          expect(forwardTraversal(list.head)).toBe(list.tail);
          expect(backwardTraversal(list.tail)).toBe(list.head);
        });

        it('decrements length upon removeion', () => {
          list.remove(0);
          expect(list.length).toBe(4);
        });
      });

      describe('handles edge case: removeing to Last index (length - 1)', () => {
        it('updates tail upon removing node from idx of length - 1', () => {
          const removed = list.remove(4);
          expect(removed.val).toBe('E');
          expect(list.tail.val).toBe('D');
        });

        it('correctly sets .prev & .next pointers on each node', () => {
          list.remove(4);
          expect(forwardTraversal(list.head)).toBe(list.tail);
          expect(backwardTraversal(list.tail)).toBe(list.head);
        });

        it('decrements length upon removeion', () => {
          list.remove(4);
          expect(list.length).toBe(4);
        });
      });

      describe('handles typical case: removing from any Middle index', () => {
        it('head and tail are unchanged, as expected', () => {
          const head = list.head.val;
          const tail = list.tail.val;

          list.remove(3);
          expect(list.head.val).toBe(head);
          expect(list.tail.val).toBe(tail);
        });

        it('correctly sets .prev & .next pointers on each node', () => {
          list.remove(2);
          expect(forwardTraversal(list.head)).toBe(list.tail);
          expect(backwardTraversal(list.tail)).toBe(list.head);
        });

        it('decrements length upon removeion', () => {
          list.remove(2);
          expect(list.length).toBe(4);
        });
      });
    });
  });
});