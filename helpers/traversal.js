// trav from head -->
const forwardTraversal = (head) => {
  let trav = head;

  while (trav.next) {
  trav = trav.next;
  }
  return trav;
};

// trav from tail <--
const backwardTraversal = (tail) => {
  let trav = tail;

  while (trav.prev) {
  trav = trav.prev;
  }
  return trav;
}

module.exports = {
  forwardTraversal,
  backwardTraversal,
};