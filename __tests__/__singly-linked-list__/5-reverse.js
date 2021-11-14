const { SinglyLinkedList } = require('../../singly-linked-list');


// can test all three ways of reversing list
// --> iterative by traversal
// --> iterative by using stack
// --> recursive

describe('reverse() method', () => {
  let list;
  
  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  describe('handles all 3 List cases', () => {
    it('handles edge case: <1 node', () => {
      expect(list.reverse()).toBe(-1);
    });
  
    describe('handles edge case: 1 node', () => {
      test('as expected, head and tail remain unchanged', () => {
        list.push('lone node')
        expect(list.reverse().head.val).toBe('lone node');
        expect(list.reverse().tail.val).toBe('lone node');
        expect(list.length).toBe(1);
      });
  
      /**
       
       test('list.print() returns the same list with a lone node', () => {
         list.push('lone node');
         list.reverse();
         const headToTail = list.print();
         expect(headToTail[0]).toBe(list.head.val);
       });

      */
    });
  
    describe('handles typical case: >1 node', () => {
      describe('list.reverse() on a 2-item SLL reverses list as expected', () => {
        it('old head becomes the new tail, and vice versa', () => {
          list.push('new tail');
          list.push('new head');
          list.reverse();
          expect(list.head.val).toBe('new head');
          expect(list.tail.val).toBe('new tail');
        });
  
        test('links/pointers are set correctly on the reversed list', () => {
          list.push('new tail');
          list.push('new head');
          list.reverse();
          expect(list.head.val).toBe('new head');
          expect(list.head.next.val).toBe('new tail');
          expect(list.head.next.next).toBe(null);
        });
        /** 
         
         it('list.print() prints the expected, reversed List', () => {
           list.push('A');
           list.push('B');
           list.reverse();
           const expected = ['B', 'A'];
           expect(list.print()).toBe(['B', 'A']);
         });
  
         */
      });
      
      describe('list.reverse() on a 3-item SLL reverses list as expected', () => {
        beforeEach(() => {
          list.push('new tail');
          list.push('middle node');
          list.push('new head');
          list.reverse();
        });
  
        test('old head becomes the new tail, and vice versa', () => {
          expect(list.head.val).toBe('new head');
          expect(list.tail.val).toBe('new tail');
        });
  
        test('links/pointers are set correctly on the reversed list', () => {
          expect(list.head.val).toBe('new head');
          expect(list.head.next.val).toBe('middle node');
          expect(list.head.next.next.val).toBe('new tail');
          expect(list.head.next.next.next).toBe(null);
        });
        /** 
        
        test('list.print() prints the reversed list', () => {
          list.push('A');
          list.push('B');
          list.push('C');
          list.reverse();
  
          const reversedList = new SinglyLinkedList();
          reversedList.push('C');
          reversedList.push('B');
          reversedList.push('A');
          expect(list.reverse()).toEqual(reversedList);
          console.log(list)
          console.log(reversedList)
        });
        
        */
      });
    });
  });
});
