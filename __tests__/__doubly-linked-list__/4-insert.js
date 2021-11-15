const { DoublyLinkedList } = require('../../doubly-linked-list');
const { forwardTraversal, backwardTraversal } = require('../../helpers/traversal');

let list;

beforeEach(() => {
  list = new DoublyLinkedList();
});

describe('insert method', () => {
  it('returns a list instance', () => {
    const insertedList = list.insert(0, 'yay');
    expect(insertedList instanceof DoublyLinkedList).toBe(true);
  });

  describe('handles invalid arguments:', () => {
    it('throws an error when passed a string as an index', () => {
      expect(() => {list.insert('invalid arg', 'any value')}).toThrow();
    });

    it('does NOT type coerce strings (e.g. when passed index of "1"), instead throws an error when this happens', () => {
      expect(() => {list.insert('1', 'any value')}).toThrow();
    });
    
    it('throws an error when passed an object as an index', () => {
      expect(() => {list.insert({}, 'any value')}).toThrow();
    });
    
    it('throws an error when passed a non-integer index', () => {
      expect(() => {list.insert(1.54, 'any value')}).toThrow();    
      expect(() => {list.insert(1/4, 'any value')}).toThrow();    
    });
  });
  
  describe('handles all invalid indices:', () => {
    test('returns -1 when passed a Negative Index', () => {
      expect(list.insert(-1, 'any value')).toBe(-1);
    });

    test('returns -1 when passed an index Greater Than the list length', () => {
      expect(list.insert(20)).toBe(-1);
      list.push('A');
      expect(list.insert(20)).toBe(-1);
      list.push('B');
      list.push('C');
      expect(list.insert(20)).toBe(-1);
    })

    test('given a list WITH nodes, pushes node & updates tail when inserting to index === list.length', () => {
      list.push('A');
      // A --> null        where length === 1
      // A --> 'any value' --> null
      expect(list.insert(1, 'any value').tail.val).toBe('any value');
      expect(list.length).toBe(2);
      list.push('B');
      list.push('C');
      // A --> 'any value' --> B --> C --> null       where length === 4
      // A --> 'any value' --> B --> C --> 'val 2' --> null
      expect(list.insert(4, 'val 2').tail.val).toBe('val 2');
      expect(list.length).toBe(5);
    });
    
    // correctly inserts node when passed out-of-bounds indices equal to LL length, in an Empty List
    describe('given an EMPTY list, correctly inserts node when inserting to index of 0', () => {
      it('correctly inserts value', () => {
        list.insert(0, 'any value');
        expect(list.head.val).toBe('any value');
        expect(list.tail.val).toBe('any value');
      });
      
      it('increments length correctly', () => {
        list.insert(0, 'any value');
        expect(list.length).toBe(1);
      })

      it('correctly sets .prev and .next on lone node', () => {
        list.insert(0, 'any val');
        expect(list.head.next).toBe(null);
        expect(list.head.prev).toBe(null);
      });
    });
  });
  
  describe('given a valid index, handles all 3 List Cases ( <1 node, 1 node, >1 node SLL )', () => {
      describe('handles all edge cases ( <1 node, 1 node )', () => {
        describe('in a <1 node SLL (Empty List), inserts node at correct position & increments length', () => {
          it('inserts node at correct position', () => {
            list.insert(0, 'any value');
            expect(list.head.val).toBe('any value');
          });
          
          it('increments length accordingly', () => {
            list.insert(0, 'any value');
            expect(list.length).toBe(1);
          });

          it('correctly sets .prev and .next on each node', () => {
            list.insert(0, 'any value');
            expect(list.head.prev).toBe(null);
            expect(list.head.next).toBe(null);
            expect(forwardTraversal(list.head)).toBe(list.tail);
            expect(backwardTraversal(list.tail)).toBe(list.head);
          });
        });
        
        describe('in a 1 node SLL, inserts node at correct position and increments length', () => {
          beforeEach(() => {
            list.push('A');
            list.insert(0, 'new node');
          });

          it('LIST: inserts the node at correct position', () => {
            expect(list.head.val).toBe('new node');
          });

          it('LIST: increments length accordingly', () => {
            expect(list.length).toBe(2);
          });

          it('LIST: sets head & tail correctly', () => {
            expect(list.head.val).toBe('new node');
            expect(list.tail.val).toBe('A');
          });

          it('NODE: sets .prev and .next pointers on each node accordingly', () => {
            expect(list.head.prev).toBe(null);
            expect(list.tail.next).toBe(null);
            expect(forwardTraversal(list.head)).toBe(list.tail);
            expect(backwardTraversal(list.tail)).toBe(list.head);
          });
        });
      });
      
      describe('handles typical case ( >1 node SLL ):', () => {
        describe("list.insert() in a 2-item SLL", () => {
          test('LIST: inserts the new node into the correct position', () => {
            list.push('A');
            list.push('B');
            list.insert(1, 'special!');
            // 'A' --> 'special!' --> 'B'
            expect(list.head.next.val).toBe('special!');
          });

          test('LIST: correctly updates head & tail', () => {
            list.push('A');
            list.push('B');
            list.insert(1, 'special!');
            expect(list.head.val).toBe('A');
            expect(list.tail.val).toBe('B');
          });

          test('NODE: correctly sets .next & .prev pointers on each node', () => {
            list.push('A');
            list.push('B');
            list.insert(1, 'special!');
            expect(forwardTraversal(list.head)).toBe(list.tail);
            expect(backwardTraversal(list.tail)).toBe(list.head);
          });
          
          test('LIST: increments length accordingly', () => {
            list.push('A');
            list.push('B');
            list.insert(1, 'special!');
            // 'A' --> 'special!' --> 'B'
            expect(list.length).toBe(3);
          });
        });
        
        describe(`list.insert() in a 3-item SLL,`, () => {
          beforeEach(() => {
            list.push('A');
            list.push('B');
            list.push('C');
            list.insert(1, 'new value');   
          });
            
          it('LIST: increments length upon insertion', () => {
            // A --> 'new value' --> B --> C --> null
            expect(list.length).toBe(4);
          });
          
          it('LIST: inserts a new node to the correct position', () => {
            // A --> 'new value' --> B --> C --> null
            expect(list.head.next.val).toBe('new value');
            
            list.insert(0, 'new head');
            // 'new head' --> A --> 'new value' --> B --> C --> null
            expect(list.head.val).toBe('new head');
            expect(list.length).toBe(5);
          });

          it('LIST: sets head & tail accordingly', () => {
            expect(list.head.val).toBe('A');
            expect(list.tail.val).toBe('C');
          });

          it('NODE: sets .prev and .next pointers on each node accordingly', () => {
            expect(forwardTraversal(list.head)).toBe(list.tail);
            expect(backwardTraversal(list.tail)).toBe(list.head);
          });

          it('NODE: sets the expected value on the inserted node', () => {
            expect(list.head.next.val).toBe('new value');
          });
        });

        describe('list.insert() on a 5-node SLL', () => {
          beforeEach(() => {
            list.push('A');
            list.push('B');
            list.push('C');
            list.push('D');
            list.push('E');
          });

          
          describe('handles edge case: inserting to first index (0)', () => {
            it('updates head upon inserting to idx 0', () => {
              list.insert(0, 'newly inserted!');
              expect(list.get(0).val).toBe('newly inserted!');
              expect(list.head.val).toBe('newly inserted!');
            });
            
            it('correctly sets .prev & .next pointers on each node', () => {
              list.insert(0, 'newly inserted!');
              expect(forwardTraversal(list.head)).toBe(list.tail);
              expect(backwardTraversal(list.tail)).toBe(list.head);
            })

            it('increments length upon insertion', () => {
              list.insert(0, 'any val');
              expect(list.length).toBe(6);
            });
          });

          describe('handles edge case: inserting to Last index (length - 1)', () => {
            it('updates tail upon inserting to idx of length - 1', () => {
              list.insert(4, 'newly inserted!');
              // from A --> B --> C --> D --> E
              // to A --> B --> C --> D --> 'newly inserted' --> E
              expect(list.tail.val).toBe('E');
              expect(list.get(4).val).toBe('newly inserted!');
            });
            
            it('correctly sets .prev & .next pointers on each node', () => {
              list.insert(4, 'newly inserted!');
              expect(forwardTraversal(list.head)).toBe(list.tail);
              expect(backwardTraversal(list.tail)).toBe(list.head);
            })

            it('increments length upon insertion', () => {
              list.insert(4, 'any val');
              expect(list.length).toBe(6);
            });
          });

          describe('handles typical case: inserting to any Middle index', () => {
            it('head and tail are unchanged, as expected', () => {
              const head = list.head.val;
              const tail = list.tail.val;
              // A -> B -> C -> D -> E
              // to
              // A -> B -> C -> 'newly inserted!' -> D -> E
              list.insert(3, 'newly inserted!');
              expect(list.head.val).toBe(head);
              expect(list.tail.val).toBe(tail);
            });
            
            it('correctly sets .prev & .next pointers on each node', () => {
              list.insert(2, 'newly inserted!');
              expect(forwardTraversal(list.head)).toBe(list.tail);
              expect(backwardTraversal(list.tail)).toBe(list.head);
            })

            it('increments length upon insertion', () => {
              list.insert(2, 'any val');
              expect(list.length).toBe(6);
            });
          });
        });
      });
    });
  });