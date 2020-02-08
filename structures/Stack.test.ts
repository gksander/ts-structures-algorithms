import { Stack } from "./Stack";

// Stacks we'll be using
const names = ["jane", "jack", "jill"];
let stack: Stack<string> = new Stack<string>();
let emptyStack: Stack<string> = new Stack<string>();

/**
 * Testing stacks
 */
describe("Stack", () => {
  // Instantiate lists before each test
  beforeEach(() => {
    stack = new Stack<string>();
    names.forEach(name => stack.push(name));
    emptyStack = new Stack<string>();
  });

  // Test base accessor
  describe("Stack.base", () => {
    test(".base should return first element for non-empty stack", () => {
      expect(stack.base).toBe(names[0]);
    });

    test(".base should return undefined for empty stack", () => {
      expect(emptyStack.base).toBeUndefined();
    });
  });

  // Test top accessor
  describe("Stack.top", () => {
    test(".top should return first element for non-empty stack", () => {
      expect(stack.top).toBe(names[names.length - 1]);
    });

    test(".top should return undefined for empty stack", () => {
      expect(emptyStack.top).toBeUndefined();
    });
  });

  describe("Stack.push", () => {
    test(".push should increase size", () => {
      const initialSize = stack.size;
      stack.push("billy");
      expect(stack.size).toBe(initialSize + 1);
    });

    test(".push should add element to top", () => {
      const newName = "billy";
      stack.push(newName);
      expect(stack.top).toBe(newName);
    });
  });

  describe("Stack.pop", () => {
    test(".pop should decrease size", () => {
      const initialSize = stack.size;
      stack.pop();
      expect(stack.size).toBe(initialSize - 1);
    });

    test(".pop should return top of stack", () => {
      const topOfStack = stack.top;
      expect(stack.pop()).toBe(topOfStack);
    });

    test(".pop should return undefined for empty stack", () => {
      expect(emptyStack.pop()).toBeUndefined();
    });
  });

  describe("Stack.isEmpty", () => {
    test(".isEmpty should return false for non-empty stack", () => {
      expect(stack.isEmpty).toBeFalsy();
    });

    test(".isEmpty should return true for empty stack", () => {
      expect(emptyStack.isEmpty).toBeTruthy();
    });
  });

  describe("Stack.clear", () => {
    test(".clear should empty out a stack", () => {
      stack.clear();
      expect(stack.isEmpty).toBeTruthy();
      expect(stack.base).toBeUndefined();
    });
  });

  describe("Stack.size", () => {
    test(".size should return length of stack", () => {
      expect(stack.size).toBe(names.length);
      expect(emptyStack.size).toBe(0);
    });
  });
});
