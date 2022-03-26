import { ListNode } from "./ListNode";

interface ILinkedList<T> {
  insertAtBegin(data: T): ListNode<T>;
  insertAtEnd(data: T): ListNode<T>;
  deleteNode(node: ListNode<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): ListNode<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
  public head: ListNode<T>;

  constructor(node: ListNode<T>) {
    this.head = node;
  }

  public insertAtBegin(data: T): ListNode<T> {
    const oldHead = this.head;
    this.head = new ListNode(data);
    this.head.next = oldHead;

    return this.head;
  }

  public insertAtEnd(data: T): ListNode<T> {
    const newTail = new ListNode(data);
    let currentNode: ListNode<T> | null = this.head;

    while (currentNode !== null) {
      if (currentNode.next === null) {
        currentNode.next = newTail;
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }

    return newTail;
  }

  public deleteNode(node: ListNode<T>): void {
    let currentNode: ListNode<T> | null = this.head;

    while (currentNode !== null) {
      if (currentNode.next === node) {
        currentNode.next = currentNode.next.next;
      }

      currentNode = currentNode.next;
    }
  }

  public traverse(): T[] {
    const nodes: T[] = [];
    let currentNode: ListNode<T> | null = this.head;

    while (currentNode !== null) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  public size(): number {
    let count = 0;
    let currentNode: ListNode<T> | null = this.head;

    while (currentNode !== null) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  public search(comparator: (data: T) => boolean): ListNode<T> | null {
    let currentNode: ListNode<T> | null = this.head;

    while (currentNode !== null) {
      if (comparator(currentNode.data)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}

const testLinkedList = () => {
  const firstNode = new ListNode(1);
  const linkedList = new LinkedList(firstNode);

  console.log("\ntraverse", linkedList.traverse());
  console.log("\nsize", linkedList.size());

  linkedList.insertAtEnd(2);
  linkedList.insertAtEnd(3);

  console.log("\nhead", linkedList.head);

  linkedList.insertAtBegin(0);

  console.log("\nhead", linkedList.head);
  console.log("\ntraverse", linkedList.traverse());
  console.log("\nsize", linkedList.size());

  console.log(
    "\nsearch",
    linkedList.search((x) => x === 3)
  );

  console.log(
    "\nsearch",
    linkedList.search((x) => x === 0)
  );

  linkedList.deleteNode(firstNode);

  console.log("\ntraverse", linkedList.traverse());
  console.log("\nsize", linkedList.size());
};

// testLinkedList();

class DoubleListNode<T> {
  public data: T;
  public next: DoubleListNode<T> | null = null;
  public prev: DoubleListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

/**
 * Haven't started on this yet... Not sure that doubly linked lists are ever useful.
 */
class DoublyLinkedList<T> implements ILinkedList<T> {
  public head: DoubleListNode<T>;

  constructor(node: DoubleListNode<T>) {
    this.head = node;
  }

  public insertAtBegin(data: T): DoubleListNode<T> {
    const oldHead = this.head;
    this.head = new DoubleListNode(data);
    this.head.next = oldHead;
    this.head.prev = oldHead.prev;

    return this.head;
  }

  public insertAtEnd(data: T): DoubleListNode<T> {
    const newTail = new DoubleListNode(data);
    let currentNode: DoubleListNode<T> | null = this.head;

    while (currentNode !== null) {
      if (currentNode.next === null) {
        currentNode.next = newTail;
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }

    return newTail;
  }

  public deleteNode(node: DoubleListNode<T>): void {
    let currentNode: DoubleListNode<T> | null = this.head;

    while (currentNode !== null) {
      if (currentNode.next === node) {
        currentNode.next = currentNode.next.next;
      }

      currentNode = currentNode.next;
    }
  }

  public traverse(): T[] {
    const nodes: T[] = [];
    let currentNode: DoubleListNode<T> | null = this.head;

    while (currentNode !== null) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  public size(): number {
    let count = 0;
    let currentNode: DoubleListNode<T> | null = this.head;

    while (currentNode !== null) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  public search(comparator: (data: T) => boolean): DoubleListNode<T> | null {
    let currentNode: DoubleListNode<T> | null = this.head;

    while (currentNode !== null) {
      if (comparator(currentNode.data)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}

const testDoublyLinkedList = () => {
  const firstNode = new ListNode(1);
  const linkedList = new LinkedList(firstNode);

  console.log("\ntraverse", linkedList.traverse());
  console.log("\nsize", linkedList.size());

  linkedList.insertAtEnd(2);
  linkedList.insertAtEnd(3);

  console.log("\nhead", linkedList.head);

  linkedList.insertAtBegin(0);

  console.log("\nhead", linkedList.head);
  console.log("\ntraverse", linkedList.traverse());
  console.log("\nsize", linkedList.size());

  console.log(
    "\nsearch",
    linkedList.search((x) => x === 3)
  );

  console.log(
    "\nsearch",
    linkedList.search((x) => x === 0)
  );

  linkedList.deleteNode(firstNode);

  console.log("\ntraverse", linkedList.traverse());
  console.log("\nsize", linkedList.size());
};

testDoublyLinkedList();
