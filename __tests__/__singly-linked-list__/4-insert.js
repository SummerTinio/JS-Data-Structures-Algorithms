const { SinglyLinkedList } = require('../../singly-linked-list');

let list;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('insert method', () => {
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

    test('given a list WITH nodes, returns -1 when inserting to an index that is Equal to List length', () => {
      list.push('A');
      expect(list.insert(1, 'any value')).toBe(-1);
      list.push('B');
      list.push('C');
      list.push('D');
      expect(list.insert(4, 'any value')).toBe(-1);
      expect(list.length).toBe(4);
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
    });
  });
  
  describe('given a valid index, handles all 3 List Cases ( <1 node, 1 node, >1 node SLL )', () => {


      describe('handles all edge cases ( <1 node, 1 node )', () => {
        test('in a <1 node SLL (Empty List), inserts node at correct position & increments length', () => {
          list.insert(0, 'any value');
          expect(list.length).toBe(1);
          // list.insert(0, 'any value');
          // expect(list.head.val).toBe('any value');
        });
        
        test('in a 1 node SLL, inserts node at correct position and increments length', () => {
          list.push('A');
          list.insert(0, 'new node');
          expect(list.head.val).toBe('new node');
          expect(list.tail.val).toBe('A');
          expect(list.length).toBe(2);
        });
      });
      
    
      describe('handles typical case ( >1 node SLL ):', () => {
        describe("list.insert(1, 'special') in a 2-item SLL", () => {
          test('inserts the new node into the correct position', () => {
            list.push('A');
            list.push('B');
            list.insert(1, 'special!');
            // 'A' --> 'special!' --> 'B'
            expect(list.head.next.val).toBe('special!');
          });
          
          test('increments length accordingly', () => {
            list.push('A');
            list.push('B');
            list.insert(1, 'special!');
            // 'A' --> 'special!' --> 'B'
            expect(list.length).toBe(3);
          });
        });
        
        describe(`list.insert(1, 'new value') in a 3-item SLL,`, () => {
          beforeEach(() => {
            list.push('A');
            list.push('B');
            list.push('C');
            list.insert(1, 'new value');   
          });
            
          it('increments length upon insertion', () => {
            // A --> 'new value' --> B --> C --> null
            expect(list.length).toBe(4);
          });
          
          it('inserts a new node to the correct position', () => {
            // A --> 'new value' --> B --> C --> null
            expect(list.head.next.val).toBe('new value');
            
            list.insert(0, 'new head');
            // 'new head' --> A --> 'new value' --> B --> C --> null
            expect(list.head.val).toBe('new head');
            expect(list.length).toBe(5);
          });
        });
      });
    
    });
  });