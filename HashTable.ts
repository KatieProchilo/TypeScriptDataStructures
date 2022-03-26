interface IHashTable<T> {
  hash: (key: string) => number;
  insert: (item: T) => void;
  get: (key: string) => void;
}

class HashTable<T> implements IHashTable<T> {
  private size: number; // Number of indexes in the hash table.
  private storage: [] = [];

  constructor(size: number) {
    this.size = size;
  }

  /**
   * Turns the key into an ID to be stored in the hash table. This will always
   * return the same output for a specific input.
   *
   * @param key 
   */
  public hash(key: string): number {
    let id: number = 0;

    for (let i = 0; i < key.length; i++) {
      id += key.charCodeAt(i) * 100;
    }

    // Make the generated ID fit into our range, the size of our array. This
    // means any ID will be between 0 and our specified size value.
    return (id % this.size);
  }

  public insert(item: T): void {

  }
}

const hashTableTest = () => {
  console.log("\n\n\nHash Table");

  const tests =  [[1,2,3]];

  for (let test of tests) {
    const hashTable = new HashTable<number>(5);

    for (let value of test) {
      hashTable.insert(value);
    }
  }
}

export default hashTableTest;
