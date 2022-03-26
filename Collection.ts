abstract class Collection<T> {
  public storage: T[] = [];
  protected capacity: number = Infinity;
}

export default Collection;
