import Collection from "./Collection";
import { ListNode } from "./ListNode";

interface IDeque<T> {
  enqueueFront(item: T): void;
  enqueueBack(item: T): void;
  dequeueFront(): T | undefined;
  dequeueBack(): T | undefined;
  peekFront(): T | undefined;
  peekBack(): T | undefined;
  size(): number;
}

class DequeDoublyLinkedList<T> extends Collection<T> implements IDeque<T> {
  public front: ListNode<T>;
  public back: ListNode<T>;

  constructor() {
    super();
    this.front = this.back = null;
  }

  public enqueueFront(item: T): void {}

  public enqueueBack(item: T): void {}

  public dequeueFront(): T | undefined {}

  public dequeueBack(): T | undefined {}

  public peekFront(): T | undefined {}

  public peekBack(): T | undefined {}

  public size(): number {
    let count = 0;
    let currentNode: ListNode<T> | null = this.head;

    while (currentNode !== null) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }
}

const dequeTest = () => {
  const deque = new DequeDoublyLinkedList<any>();
  console.log(deque.storage);

  deque.enqueue(9);
  console.log(deque.storage);

  deque.enqueue("A");
  console.log(deque.storage);

  deque.dequeue();
  console.log(deque.storage);

  deque.enqueue(true);
  console.log(deque.storage);

  deque.enqueue([1, 2, 3]);
  console.log(deque.storage);

  deque.dequeue();
  deque.dequeue();
  deque.dequeue();
  console.log(deque.storage);

  deque.dequeue();
  console.log(deque.storage);

  deque.enqueue(0);
  deque.enqueue(1);
  deque.enqueue(2);
  deque.enqueue(3);
  deque.enqueue(4);
  console.log(deque.storage);

  console.log(deque.size());
};

dequeTest();
