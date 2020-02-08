// TODO: All of this

export class Queue<T> {
  // Private properties
  _items!: { [key: number]: T };
  _minIndex!: number;
  _count!: number;

  // Instantiate
  constructor(...initValues: T[]) {
    this._items = {};
    this._minIndex = 0;
    this._count = 0;

    initValues.forEach(val => this.enqueue(val));
  }

  // Head of queue
  get head(): T | undefined {
    return this._items[this._minIndex];
  }

  // Tail of queue
  get tail(): T | undefined {
    return this._items[this._minIndex + this._count - 1];
  }

  // Size of queue
  get size(): number {
    return this._count;
  }

  // Is the queue empty?
  get isEmpty(): boolean {
    return this.size === 0;
  }

  // Enqueue an element
  enqueue(value: T): T {
    this._items[this._minIndex + this._count] = value;
    this._count++;
    return value;
  }

  // Dequeue an element
  dequeue(): T | undefined {
    if (this.isEmpty) return undefined;

    const head = this.head;
    delete this._items[this._minIndex];
    this._minIndex++;
    this._count--;
    return head;
  }

  // Clear a queue
  clear(): void {
    this._items = {};
    this._minIndex = 0;
    this._count = 0;
  }
}
