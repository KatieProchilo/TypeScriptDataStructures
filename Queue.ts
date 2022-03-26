import Collection from "./Collection";

interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
}

class QueueArray<T> extends Collection<T> implements IQueue<T> {
  constructor() {
    super();
  }

  public enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Capacity has been reached.");
    }
    this.storage.push(item);
  }

  public dequeue(): T | undefined {
    return this.storage.shift();
  }

  public size(): number {
    return this.storage.length;
  }
}

export default QueueArray;

const queueArrayTest = () => {
  const queue = new QueueArray<any>();
  console.log(queue.storage);

  queue.enqueue(9);
  console.log(queue.storage);

  queue.enqueue("A");
  console.log(queue.storage);

  queue.dequeue();
  console.log(queue.storage);

  queue.enqueue(true);
  console.log(queue.storage);

  queue.enqueue([1, 2, 3]);
  console.log(queue.storage);

  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  console.log(queue.storage);

  queue.dequeue();
  console.log(queue.storage);

  queue.enqueue(0);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue.storage);

  console.log(queue.size());
};

queueArrayTest();

class QueueLinkedList<T> extends Collection<T> implements IQueue<T> {
  constructor() {
    super();
  }

  public enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Capacity has been reached.");
    }
    this.storage.push(item);
  }

  public dequeue(): T | undefined {
    return this.storage.shift();
  }

  public size(): number {
    return this.storage.length;
  }
}

const queueLinkedListTest = () => {
  const queue = new QueueArray<any>();
  console.log(queue.storage);

  queue.enqueue(9);
  console.log(queue.storage);

  queue.enqueue("A");
  console.log(queue.storage);

  queue.dequeue();
  console.log(queue.storage);

  queue.enqueue(true);
  console.log(queue.storage);

  queue.enqueue([1, 2, 3]);
  console.log(queue.storage);

  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  console.log(queue.storage);

  queue.dequeue();
  console.log(queue.storage);

  queue.enqueue(0);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue.storage);

  console.log(queue.size());
};

queueLinkedListTest();
