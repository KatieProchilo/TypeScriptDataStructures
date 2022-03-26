import Collection from "./Collection";

interface IStack<T> {
  push: (item: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  size: () => number;
}

class Stack<T> extends Collection<T> implements IStack<T> {
  constructor() {
    super();
  }

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Capacity has been reached.");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  public size(): number {
    return this.storage.length;
  }
}

const stackTest = () => {
  const stack = new Stack();
  console.log(stack.storage);

  stack.push(9);
  console.log(stack.storage);

  stack.push("A");
  console.log(stack.storage);

  stack.peek();
  console.log(stack.storage);

  const top1 = stack.pop();
  console.log(top1);
  console.log(stack.storage);

  stack.push(true);
  console.log(stack.storage);

  stack.push([1, 2, 3]);
  console.log(stack.storage);

  const top2 = stack.pop();
  console.log(top2);
  console.log(stack.storage);

  const size = stack.size();
  console.log(size);
};

stackTest();
