import { Dequeue } from "./Dequeue";

// Values we'll set up
const names = ["jane", "jack", "jill"];
let dequeue = new Dequeue<string>();
let emptyDequeue = new Dequeue<string>();

describe("Dequeue", () => {
  // Setup
  beforeEach(() => {
    dequeue = new Dequeue<string>(...names);
    emptyDequeue = new Dequeue<string>();
  });

  // Testing head method
  describe("Queue.head", () => {
    test(".head should return first element in queue for non-empty queue", () => {
      expect(dequeue.head).toBe(names[0]);
    });

    test(".head should return false for empty queue", () => {
      expect(emptyDequeue.head).toBeUndefined();
    });
  });

  // Testing tail method
  describe("Queue.tail", () => {
    test(".tail should return last element in queue for non-empty queue", () => {
      expect(dequeue.tail).toBe(names[names.length - 1]);
    });

    test(".tail should return false for empty queue", () => {
      expect(emptyDequeue.tail).toBeUndefined();
    });
  });

  // Size
  describe("Queue.size", () => {
    test(".size should return length for non-empty list", () => {
      expect(dequeue.size).toBe(names.length);
      dequeue.enqueue("billy");
      expect(dequeue.size).toBe(names.length + 1);
    });

    test(".size should return 0 for empty queue", () => {
      expect(emptyDequeue.size).toBe(0);
    });
  });

  // isEmpty
  describe("Queue.isEmpty", () => {
    test(".isEmpty should return false for non-empty queue", () => {
      expect(dequeue.isEmpty).toBeFalsy();
    });

    test(".isEmpty should return true for empty queue", () => {
      expect(emptyDequeue.isEmpty).toBeTruthy();
    });
  });

  // .enqueueFront
  describe("Dequeue.enqueueFront", () => {
    test(".enqueueFront should increase size of queue", () => {
      const initialSize = dequeue.size;
      dequeue.enqueueFront("billy");
      expect(dequeue.size).toBe(initialSize + 1);
    });

    test(".enqueueFront should return queued element", () => {
      const newName = "billy";
      expect(dequeue.enqueueFront(newName)).toBe(newName);
    });

    test(".enqueueFront should create new head", () => {
      const newName = "billy";
      expect(dequeue.head).toBe(names[0]);

      dequeue.enqueueFront(newName);
      expect(dequeue.head).toBe(newName);
    });
  });

  // DequeueFront (normal dequeue)
  describe("Dequeue.dequeueFront", () => {
    test(".dequeueFront should decrease size of queue", () => {
      const initialSize = dequeue.size;
      dequeue.dequeueFront();
      expect(dequeue.size).toBe(initialSize - 1);
    });

    test(".dequeueFront should return head element", () => {
      const head = dequeue.head;
      expect(dequeue.dequeueFront()).toBe(head);
    });

    test(".dequeueFront should return undefined for empty queue", () => {
      expect(emptyDequeue.dequeueFront()).toBeUndefined();
      expect(emptyDequeue.size).toBe(0);
    });
  });

  // EnqueueBack (normal enqueue)
  describe("Dequeue.enqueueBack", () => {
    test(".enqueueBack should increase size of queue", () => {
      const initialSize = dequeue.size;
      dequeue.enqueueBack("billy");
      expect(dequeue.size).toBe(initialSize + 1);
    });

    test(".enqueueBack should return queued element", () => {
      const newName = "billy";
      expect(dequeue.enqueueBack(newName)).toBe(newName);
    });

    test(".enqueueBack should create new tail element", () => {
      const newName = "billy";
      expect(dequeue.tail).toBe(names[names.length - 1]);

      dequeue.enqueueBack(newName);
      expect(dequeue.tail).toBe(newName);
    });
  });

  // TODO: Dequeue Back

  // Clear
  describe("Queue.clear", () => {
    test(".clear should clear out queue", () => {
      dequeue.clear();
      expect(dequeue.size).toBe(0);
      expect(dequeue.head).toBeUndefined();
      expect(dequeue.tail).toBeUndefined();
    });
  });
});
