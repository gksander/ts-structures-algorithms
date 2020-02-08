import { LinkedList } from "./LinkedList";

// LinkedList we'll be using
const names = ["jane", "jack", "jill"];
let list: LinkedList<string> = new LinkedList<string>();
let emptyList: LinkedList<string> = new LinkedList<string>();

/**
 * Testing LinkedList
 */
describe("LinkedList", () => {
  // Instantiate lists before each test
  beforeEach(() => {
    // Setup of list
    list = new LinkedList<string>();
    names.forEach(name => list.push(name));

    // Setup of empty list
    emptyList = new LinkedList<string>();
  });

  // Head of list
  test("LinkedList.head should fetch head", () => {
    expect(list.head.value).toBe(names[0]);
    expect(emptyList.head).toBe(undefined);
  });

  // Tail of List
  test("LinkedList.tail should fetch tail", () => {
    expect(list.tail.value).toBe(names[names.length - 1]);
    expect(emptyList.tail).toBe(undefined);
  });

  /**
   * Testing .push method
   */
  describe("LinkedList.push", () => {
    // Should increase length
    test(".push should increase size of list", () => {
      const initialLength = list.size;
      list.push("billy");
      expect(list.size).toBe(initialLength + 1);
    });

    // Should add element to end
    test(".push should add element to end of list", () => {
      const newName = "billy";
      const oldTail = list.tail;

      list.push(newName);

      expect(oldTail.next).toBe(list.tail);
      expect(list.tail.value).toBe(newName);
    });

    // Should add element to empty list
    test(".push should add element to empty list", () => {
      const newName = "billy";
      emptyList.push(newName);
      expect(emptyList.tail).toBe(emptyList.head);
      expect(emptyList.tail.value).toBe(newName);
    });
  });

  /**
   * Get node at
   */
  describe("LinkedList.getNodeAt", () => {
    test(".getNodeAt should return undefined for empty lists", () => {
      expect(emptyList.getNodeAt(0)).toBeUndefined();
      expect(emptyList.getNodeAt(3)).toBeUndefined();
    });

    test(".getNodeAt should return undefined for out-of-bound indices", () => {
      expect(list.getNodeAt(-1)).toBeUndefined();
      expect(list.getNodeAt(list.size + 1)).toBeUndefined();
    });

    test(".getNodeAt should return proper values", () => {
      expect(list.getNodeAt(0).value).toBe(names[0]);
      expect(list.getNodeAt(names.length - 1).value).toBe(
        names[names.length - 1],
      );
    });
  });

  /**
   * isEmpty
   */
  describe("LinkedList.isEmpty", () => {
    test(".isEmpty should return true for empty lists", () => {
      expect(emptyList.isEmpty).toBeTruthy();
    });

    test(".isEmpty should return false for non-empty lists", () => {
      expect(list.isEmpty).toBeFalsy();
    });
  });

  /**
   * Size
   */
  describe("LinkedList.size", () => {
    test(".size returns 0 for empty list", () => {
      expect(emptyList.size).toBe(0);
    });

    test(".size returns # of nodes for non-empty list", () => {
      expect(list.size).toBe(names.length);
    });
  });

  /**
   * insertAt
   */
  describe("LinkedList.insert", () => {
    // TODO: Handle out-of-bound cases

    test(".insert can insert to head of empty list", () => {
      const newName = "billy";
      const newNode = emptyList.insert(newName, 0);

      expect(newNode.value).toBe(newName);
      expect(emptyList.head.value).toBe(newName);
    });

    test(".insert increases size of list", () => {
      const initialSize = list.size;
      list.insert("billy", 1);
      expect(list.size).toBe(initialSize + 1);
    });

    test(".insert returns new node with given value", () => {
      const newName = "billy";
      const newNode = list.insert(newName, 1);
      expect(newNode.value).toBe(newName);
    });

    // TODO: Inserting at head/tail/middle of non-empty list, chekcing links?
  });
});
