import { Queue } from "./Queue";

// Values we'll set up
const names = ["jane", "jack", "jill"];
let queue = new Queue<string>();
let emptyQueue = new Queue<string>();

/**
 * Test Queue implementation
 */
describe("Queue", function() {
  // Before each, set up queues
  beforeEach(() => {
    queue = new Queue<string>(...names);
    emptyQueue = new Queue<string>();
  });

  // Testing head method
  describe("Queue.head", () => {
    test(".head should return first element in queue for non-empty queue", () => {
      expect(queue.head).toBe(names[0]);
    });

    test(".head should return false for empty queue", () => {
      expect(emptyQueue.head).toBeUndefined();
    });
  });

  // Testing tail method
  describe("Queue.tail", () => {
    test(".tail should return last element in queue for non-empty queue", () => {
      expect(queue.tail).toBe(names[names.length - 1]);
    });

    test(".tail should return false for empty queue", () => {
      expect(emptyQueue.tail).toBeUndefined();
    });
  });

  // Size
  describe("Queue.size", () => {
    test(".size should return length for non-empty list", () => {
      expect(queue.size).toBe(names.length);
      queue.enqueue("billy");
      expect(queue.size).toBe(names.length + 1);
    });

    test(".size should return 0 for empty queue", () => {
      expect(emptyQueue.size).toBe(0);
    });
  });

  // isEmpty
  describe("Queue.isEmpty", () => {
    test(".isEmpty should return false for non-empty queue", () => {
      expect(queue.isEmpty).toBeFalsy();
    });

    test(".isEmpty should return true for empty queue", () => {
      expect(emptyQueue.isEmpty).toBeTruthy();
    });
  });

  // Enqueue
  describe("Queue.enqueue", () => {
    test(".enqueue should increase size of queue", () => {
      const initialSize = queue.size;
      queue.enqueue("billy");
      expect(queue.size).toBe(initialSize + 1);
    });

    test(".enqueue should return queued element", () => {
      const newName = "billy";
      expect(queue.enqueue(newName)).toBe(newName);
    });
  });

  // Deque-ing
  describe("Queue.dequeue", () => {
    test(".dequeue should decrease size of queue", () => {
      const initialSize = queue.size;
      queue.dequeue();
      expect(queue.size).toBe(initialSize - 1);
    });

    test(".dequeue should return head element", () => {
      const head = queue.head;
      expect(queue.dequeue()).toBe(head);
    });

    test(".dequeue should return undefined for empty queue", () => {
      expect(emptyQueue.dequeue()).toBeUndefined();
      expect(emptyQueue.size).toBe(0);
    });
  });

  // Clear
  describe("Queue.clear", () => {
    test(".clear should clear out queue", () => {
      queue.clear();
      expect(queue.size).toBe(0);
      expect(queue.head).toBeUndefined();
      expect(queue.tail).toBeUndefined();
    });
  });
});
