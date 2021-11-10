const { SinglyLinkedList } = require('../../singly-linked-list');

let list;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('remove method', () => {
  describe('handles invalid arguments:', () => {
    it('throws an error when passed a string as an index', () => {
      expect(() => {list.remove('invalid arg')}).toThrow();
      expect(() => {list.remove('0')}).toThrow();
    });
    
    it('throws an error when passed an object as an index', () => {
      expect(() => {list.remove({})}).toThrow();
    });
    
    it('throws an error when passed a non-integer index', () => {
      expect(() => {list.remove(1.54)}).toThrow();    
      expect(() => {list.remove(1/4)}).toThrow();    
    });
  });
  
  describe('handles all invalid indices:', () => {
    test('returns -1 when passed a Negative Index', () => {
      expect(list.remove(-1)).toBe(-1);
    });

    test('returns -1 when passed an index Greater Than the list length', () => {
      expect(list.remove(20)).toBe(-1);
      list.push('A');
      expect(list.remove(20)).toBe(-1);
      list.push('B');
      list.push('C');
      expect(list.remove(20)).toBe(-1);
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
  
  describe('given a valid index, handles all 3 List Cases ( <1 node, 1 node, >1 node SLL )', () => {

    describe('handles all edge cases ( <1 node, 1 node ):', () => {
      /** 
       test('successfully removes node to a <1 node SLL (Empty List)', () => {
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
      
      it('in a <1 node SLL, returns -1 when asked to remove from index 0', () => {
        expect(list.remove(0)).toBe(-1);
      });

      describe('in a 1 node SLL, (1) removes node from correct position, (2) cleans its pointers before returning it, and (3) decrements SLL length accordingly', () => {
        let removedNode;
  
        beforeEach(() => {
          list.push('A');
          removedNode = list.remove(0);
        });
  
        describe('the Node itself (Value, Links/Pointers) was correctly removed,', () => {
          it('severs pointers/links on removed node,', () => {
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
    
    describe('handles typical case ( >1 node SLL )', () => {
      describe("list.remove(1) in a 2-item SLL", () => {
        beforeEach(() => {
          list.push('A');
          list.push('B');
        });
        test('removes the node from the correct position (head)', () => {
          expect(list.remove(1).val).toBe('B');
          expect(list.head.val).toBe('A');
        });
  
        test('removes the node from the correct position (tail)', () => {
          expect(list.remove(0).val).toBe('A');
          expect(list.head.val).toBe('B');
        });
  
        test('decrements length accordingly', () => {
          list.remove(0);
          expect(list.length).toBe(1);
        });

      });
      describe('list.remove(1) in a 3-item SLL', () => {
        beforeEach(() => {
          list.push('A');
          list.push('B');
          list.push('C');
          list.remove(1);
        });
    
        it('severs links (pointers) on removed node before returning', () => {
          const removedNode = list.remove(0);
          expect(removedNode.val).toBe('A');
          expect(removedNode.next).toBe(null);
        });
        
        it('correctly removes a node from the 0th index', () => {
          list.remove(0);
          expect(list.head.val).toBe('C');
        });
        
        it('decrements length upon removing', () => {
          expect(list.length).toBe(2);
        });
        
        it('removes a new node from the correct position', () => {   
          expect(list.head.val).toBe('A');
        });
      });
    });
  
  });
  
});