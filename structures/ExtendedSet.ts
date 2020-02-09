/**
 * Modified Set class with set operations
 */
export class ExtendedSet<T> extends Set<T> {
  // Constructor
  constructor(values: T[]) {
    super(values);
  }

  // Union
  static Union<T>(A: ExtendedSet<T>, B: ExtendedSet<T>): ExtendedSet<T> {
    return new ExtendedSet<T>([...A.values(), ...B.values()]);
  }

  // Intersection
  static Intersection<T>(A: ExtendedSet<T>, B: ExtendedSet<T>): ExtendedSet<T> {
    const intersection = new ExtendedSet<T>([]);
    for (let val of A) {
      if (B.has(val)) intersection.add(val);
    }
    return intersection;
  }

  // Difference
  static Difference<T>(A: ExtendedSet<T>, B: ExtendedSet<T>): ExtendedSet<T> {
    const diffed = new ExtendedSet<T>([]);
    for (let val of A) {
      // If B doesn't contain val, add it to our difference.
      if (!B.has(val)) {
        diffed.add(val);
      }
    }
    return diffed;
  }

  // Has a subset
  hasSubset(A: ExtendedSet<T>): boolean {
    return [...A].every(el => this.has(el));
  }
}
