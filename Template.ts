interface IHashTable<T> {}

class HashTable<T> implements IHashTable<T> {
  constructor() {}
}

const hashTableTest = () => {
  console.log("\n\n\nHash Table");

  const tests =  [[1,2,3]];

  for (let test of tests) {
    const hashTable = new HashTable<number>();

    for (let testCase of test) {

    }
  }
}

export default hashTableTest;
