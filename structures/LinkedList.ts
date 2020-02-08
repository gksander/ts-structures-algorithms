import { Node } from "./Node";

/**
 * Linked list class
 */
export class LinkedList<T> {
  count!: number;
  _head!: undefined | Node<T>;
  _tail!: undefined | Node<T>;

  // Constructor
  constructor() {
    this.count = 0;
    this._head = undefined;
    this._tail = undefined;
  }

  // Get head
  get head(): Node<T> | undefined {
    return this._head;
  }

  // Get tail
  get tail(): Node<T> | undefined {
    return this._tail;
  }

  // Add to end of list
  push(value: T): Node<T> {
    const newNode = new Node<T>(value);

    // If empty, newNode will be the head and tail
    if (this.tail === undefined) {
      this._head = newNode;
      this._tail = newNode;
    }
    // Otherwise, swap old tail out
    else {
      let oldTail = this.tail;
      this._tail = newNode;
      oldTail.next = this._tail;
    }
    this.count++;

    return newNode;
  }

  // Get node at a given index
  getNodeAt(index: number): undefined | Node<T> {
    // Make sure we're in bound
    if (index < 0 || index > this.count - 1 || this.head === undefined)
      return undefined;

    let i = 0;
    let current = this.head;

    while (i < index) {
      if (!current.next) return undefined;
      current = current.next;
      i++;
    }

    return current;
  }

  // Insert a node with a given value at a given position
  insert(value: T, index: number) {
    // Make sure we're in bound
    if (index < 0 || index > this.size) throw new Error("Invalid index");

    // Create new node
    const newNode = new Node(value);

    // 3 cases: insert at head, insert at tail, or insert somewhere in between
    // Head
    if (index === 0) {
      newNode.next = this.head;
      this._head = newNode;
      if (this.isEmpty) this._tail = newNode;
    }
    // Tail
    else if (index === this.size - 1) {
      // Old tail now points at newNode
      this.tail.next = newNode;
      this._tail = newNode;
    } else {
      // Get nodes at position and before
      const nodeBefore = this.getNodeAt(index - 1),
        nodeAt = this.getNodeAt(index);

      // Update links
      nodeBefore.next = newNode;
      newNode.next = nodeAt;
    }

    // Increment count and return node
    this.count++;
    return newNode;
  }

  // TODO:
  remove(value: T) {}

  // TODO:
  indexOf(value: T) {}

  // TODO:
  removeAt(position: number) {}

  // Determine if empty
  get isEmpty(): boolean {
    return this.count === 0;
  }

  // Determine size
  get size(): number {
    return this.count;
  }

  // toString method
  toString(): string {
    let values = [];
    let current = this._head;

    // Empty
    if (!current) return "";

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(", ");
  }
}
