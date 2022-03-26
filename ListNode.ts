class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class DoubleListNode<T> {
  public data: T;
  public next: ListNode<T> | null = null;
  public previous: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export { DoubleListNode, ListNode };
