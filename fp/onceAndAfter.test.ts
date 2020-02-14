import { onceAndAfter } from "./onceAndAfter";

const FIRST = "ME FIRST";
const AFTER = "YADADADA";
let f, g;

describe("onceAndAfter", () => {
  // Setup
  beforeEach(() => {
    f = jest.fn(() => FIRST);
    g = jest.fn(() => AFTER);
  });

  // Without "onceAndAfter"
  test(`Without "onceAndAfter", f always runs`, () => {
    expect(f()).toBe(FIRST);
    expect(f()).toBe(FIRST);
    expect(f()).toBe(FIRST);
    expect(f).toHaveBeenCalledTimes(3);
  });

  // With "onceAndAfter"
  test(`With "onceAndAfter", f called once - g called n - 1 times`, () => {
    const h = jest.fn(onceAndAfter(f, g));
    expect(h()).toBe(FIRST);
    expect(h()).toBe(AFTER);
    expect(h()).toBe(AFTER);
    // Call times
    expect(f).toHaveBeenCalledTimes(1);
    expect(g).toHaveBeenCalledTimes(2);
  });
});
