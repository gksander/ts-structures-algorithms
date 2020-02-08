import { Queue } from "./Queue";

export class Dequeue<T> extends Queue<T> {
  // Instantiate
  constructor(...values: T[]) {
    super(...values);
  }

  // Enqueue from front
  enqueueFront(value: T): T {
    this._minIndex--;
    this._count++;
    this._items[this._minIndex] = value;
    return value;
  }

  // Dequeue from front (normal)
  dequeueFront(): T | undefined {
    return super.dequeue();
  }

  // Enqueue from the back (normal)
  enqueueBack(value: T): T {
    return super.enqueue(value);
  }

  // Dequeue from back
  dequeueBack(): T | undefined {
    if (this.isEmpty) return undefined;

    const tail = this.tail;
    delete this._items[this._minIndex + this._count - 1];
    this._count--;
    return tail;
  }
}
