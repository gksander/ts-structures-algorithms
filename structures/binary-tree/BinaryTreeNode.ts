export class BinaryTreeNode<T> {
  // Properties
  value!: T;
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;

  constructor(val: T) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
