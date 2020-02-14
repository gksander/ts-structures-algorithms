import { thisManyTimes } from "./thisManyTimes";

/**
 * Test that once works properly
 */
const HELLO_WORLD = "Hello world!";
let helloWorld;

describe("thisManyTimes", () => {
  // Setup
  beforeEach(() => {
    helloWorld = jest.fn(() => HELLO_WORLD);
  });

  // Without "thisManyTimes"
  test(`Without "thisManyTimes", function runs always`, () => {
    expect(helloWorld()).toBe(HELLO_WORLD);
    expect(helloWorld()).toBe(HELLO_WORLD);
    expect(helloWorld()).toBe(HELLO_WORLD);
    expect(helloWorld).toHaveBeenCalledTimes(3);
  });

  // With "thisManyTimes"
  test(`With "thisManyTimes", function runs n times`, () => {
    const helloWorldOnce = jest.fn(thisManyTimes(helloWorld, 2));
    expect(helloWorldOnce()).toBe(HELLO_WORLD);
    expect(helloWorldOnce()).toBe(HELLO_WORLD);
    expect(helloWorldOnce()).toBeUndefined();
    // Call expectations
    expect(helloWorldOnce).toHaveBeenCalledTimes(3);
    expect(helloWorld).toHaveBeenCalledTimes(2);
  });
});
