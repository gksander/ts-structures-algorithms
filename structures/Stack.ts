export class Stack<T> {
  _items!: { [key: number]: T };
  _count!: number;

  // Instantiate
  constructor() {
    this._items = {};
    this._count = 0;
  }

  // Peek from top of stack
  get base(): T | undefined {
    return this._items[0];
  }

  // Top of stack
  get top(): T | undefined {
    return this._items[this._count - 1];
  }

  // Push values on to stack
  push(...values: T[]) {
    for (let val of values) {
      this._items[this._count] = val;
      this._count++;
    }
  }

  // Pop from stack
  pop() {
    if (this.size === 0) return undefined;

    const val = this._items[this._count - 1];
    delete this._items[this._count - 1];
    this._count--;
    return val;
  }

  // Determine if empty
  get isEmpty(): boolean {
    return this.size === 0;
  }

  // Clear out
  clear(): void {
    this._items = {};
    this._count = 0;
  }

  // Size
  get size(): number {
    return this._count;
  }
}
