import { BinaryTreeNode } from "./BinaryTreeNode";

// Comparison function
const defaultCompare = <T>(a: T, b: T): -1 | 0 | 1 => {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
};

/**
 * Binary tree
 */
export class BinaryTree<T> {
  // Properties
  _root!: BinaryTreeNode<T>;
  _compFn!: <T>(a: T, b: T) => -1 | 0 | 1;

  // Instantiate with a root value
  constructor(rootVal: T, compFn = defaultCompare) {
    this._root = new BinaryTreeNode(rootVal);
    this._compFn = compFn;
  }

  // Access to the root
  get root(): BinaryTreeNode<T> {
    return this._root;
  }

  // Insert(key)

  // Search(key)

  // traverseInOrder

  // preOrderTraverse

  // postOrderTraverse

  // min

  // max

  // remove(key)
}
