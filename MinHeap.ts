interface IMinHeap<T> {
  insert: (item: T) => void;
  peek: () => T;
  poll: () => T;
}

class Heap<T> implements IMinHeap<T> {
  public storage: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  private getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.storage.length;
  }

  private hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.storage.length;
  }

  private hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  private leftChild(parentIndex: number): T {
    return this.storage[this.getLeftChildIndex(parentIndex)];
  }

  private rightChild(parentIndex: number): T {
    return this.storage[this.getRightChildIndex(parentIndex)];
  }

  private parent(childIndex: number): T {
    return this.storage[this.getParentIndex(childIndex)];
  }

  private swap(i: number, j: number): void {
    [this.storage[i], this.storage[j]] = [this.storage[j], this.storage[i]];
  }

  /**
   * Return the first element from storage without removing it.
   **/
  public peek(): T {
    if (this.storage.length === 0) {
      throw Error("Error! No items in storage to poll.");
    }

    return this.storage[0];
  }

  /**
   * Remove and return the first element from storage.
   **/
  public poll(): T {
    if (this.storage.length === 0) {
      throw Error("Error! No items in storage to poll.");
    }

    const item = this.storage[0];
    const pop = this.storage.pop() as T;
    this.storage[0] = pop;
    this.heapifyDown();

    return item;
  }

  private heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let winningChildIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.comparator(this.leftChild(index), this.rightChild(index)) < 0
      ) {
        winningChildIndex = this.getRightChildIndex(index);
      }

      if (this.storage[index] < this.storage[winningChildIndex]) {
        break;
      }

      this.swap(index, winningChildIndex);
      index = winningChildIndex;
    }
  }

  public insert(item: T): void {
    this.storage.push(item);
    this.heapifyUp();
  }

  private heapifyUp() {
    if (this.storage.length === 0) {
      throw Error("Error! No items in storage to heapify.");
    }

    let index = this.storage.length - 1;

    // Returns a positive when the first number should be at the top
    while (
      this.hasParent(index) &&
      this.comparator(this.parent(index), this.storage[index]) > 0
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
}

const heapTest = (comparator: (a: number, b: number) => number) => {
  const tests = [
    // [10, 2, 7, 6, 1, 9, 3, 5, 4, 8],
    // [5, 4, 3, 2, 1],
    // [15, 17, 25, 20, 10],
    // [10, 15, 20, 17, 25],
    [
      -5, 9, 10, 19, 200, 0, 200, -4506, 5432, 866, -13, 6, -5, -4503, 7, 82,
      82, 10, -4503, -4506, 5,
    ],
  ];

  for (let test of tests) {
    const heap = new Heap<number>(comparator);

    console.log(`\n\n\nTest ${test}:`);

    for (let testCase of test) {
      heap.insert(testCase);
    }

    console.log(`\nPeek:`);
    let peek = heap.peek();
    console.log(peek);

    console.log(`\nStorage:`);
    console.log(heap.storage);

    console.log(`\nPoll:`);
    let poll = heap.poll();
    console.log(poll);

    console.log(`\nStorage:`);
    console.log(heap.storage);

    console.log(`\nInsert:`);
    heap.insert(6969696);
    console.log(heap.storage);

    console.log(`\nPeek:`);
    peek = heap.peek();
    console.log(peek);

    console.log(`\nStorage:`);
    console.log(heap.storage);

    console.log(`\nPoll:`);
    poll = heap.poll();
    console.log(poll);

    console.log(`\nStorage:`);
    console.log(heap.storage);

    console.log(`\nPoll:`);
    poll = heap.poll();
    console.log(poll);

    console.log(`\nStorage:`);
    console.log(heap.storage);

    console.log(`\nPoll:`);
    poll = heap.poll();
    console.log(poll);

    console.log(`\nStorage:`);
    console.log(heap.storage);

    console.log(`\nInsert:`);
    heap.insert(69);
    console.log(heap.storage);
  }
};

// Returns a positive when the first number should be at the top, i.e. when b - a
console.log("\n\n\n\nMin-Heap:");
const minHeapComparator = (a: number, b: number) => b - a;
heapTest(minHeapComparator);

// Returns a positive when the first number should be at the top, i.e. when a - b
console.log("\n\n\n\nMax-Heap:");
const maxHeapComparator = (a: number, b: number) => a - b;
heapTest(maxHeapComparator);

// Storage:
// [
//   -4506, -4506, -4503, -13, -4503,
//       0,    -5,    19,   9,    -5,
//     200,    10,     6, 200,     7,
//      82,    82,  5432,  10,   866,
//       5
// ]
