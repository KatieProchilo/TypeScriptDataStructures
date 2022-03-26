class BinarySearchTreeNode<T> {
  public data: T;
  public left?: BinarySearchTreeNode<T>;
  public right?: BinarySearchTreeNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

interface IBinarySearchTree<T> {
  insert: (data: T) => BinarySearchTreeNode<T> | undefined;
  search: (data: T) => BinarySearchTreeNode<T> | undefined;
  inOrderTraversal: (node: BinarySearchTreeNode<T>) => void;
  preOrderTraversal: (node: BinarySearchTreeNode<T>) => void;
  postOrderTraversal: (node: BinarySearchTreeNode<T>) => void;
}

class BinarySearchTree<T> implements IBinarySearchTree<T> {
  public root?: BinarySearchTreeNode<T>;
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  public insert(data: T): BinarySearchTreeNode<T> | undefined {
    if (!this.root) {
      this.root = new BinarySearchTreeNode<T>(data);
      return this.root;
    }

    let curr: BinarySearchTreeNode<T> | undefined = this.root;

    while (true) {
      if (this.comparator(data, curr.data) > 0) {
        if (!curr.right) {
          curr.right = new BinarySearchTreeNode<T>(data);
          return curr.right;
        }

        curr = curr.right;
      } else {
        if (!curr.left) {
          curr.left = new BinarySearchTreeNode<T>(data);
          return curr.left;
        }

        curr = curr.left;
      }
    }
  }

  public search(data: T): BinarySearchTreeNode<T> | undefined {
    let curr: BinarySearchTreeNode<T> | undefined = this.root;

    while (curr !== undefined) {
      const compared = this.comparator(data, curr.data);

      if (compared < 0) {
        curr = curr.left;
      } else if (compared > 0) {
        curr = curr.right;
      } else {
        return curr;
      }
    }

    return undefined;
  }

  public inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }

  public preOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
    if (node !== undefined) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  public postOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }
}

const binarySearchTreeTest = (comparator: (a: number, b: number) => number) => {
  const tests = [
    [10, 2, 7, 6, 1, 9, 3, 5, 4, 8],
    [5, 4, 3, 2, 1],
    [
      -5, 9, 10, 19, 200, 0, 200, -4506, 5432, 866, -13, 6, -5, -4503, 7, 82,
      82, 10, -4503, -4506, 5,
    ],
  ];

  for (let test of tests) {
    const bst = new BinarySearchTree<number>(comparator);

    console.log(`\n\n\nTest ${test}:`);

    for (let testCase of test) {
      bst.insert(testCase);
    }

    console.log(`\nFound ${test[0]}:`);
    let found = bst.search(test[0]);
    console.log(found);

    console.log("\nFound 2:");
    found = bst.search(2);
    console.log(found);

    console.log("\nFound 5:");
    found = bst.search(5);
    console.log(found);

    console.log("\nIn order:");
    bst.inOrderTraversal(bst.root);
    console.log("\nPre order:");
    bst.preOrderTraversal(bst.root);
    console.log("\nPost order:");
    bst.postOrderTraversal(bst.root);
  }
};

console.log("\n\n\n\nIncreasing:");
const increasingComparator = (a: number, b: number) => a - b;
binarySearchTreeTest(increasingComparator);

// console.log("\n\n\n\nDecreasing:");
// const decreasingComparator = (a: number, b: number) => b - a;
// binarySearchTreeTest(decreasingComparator);

export default BinarySearchTree;
