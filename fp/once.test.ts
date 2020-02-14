import { once } from "./once";

/**
 * Test that once works properly
 */
const HELLO_WORLD = "Hello world!";
let helloWorld = jest.fn(() => HELLO_WORLD);
describe("Once", () => {
  // Setup
  beforeEach(() => {
    helloWorld = jest.fn(() => HELLO_WORLD);
  });

  // Without "once"
  test(`Without "once", function runs always`, () => {
    expect(helloWorld()).toBe(HELLO_WORLD);
    expect(helloWorld()).toBe(HELLO_WORLD);
    expect(helloWorld()).toBe(HELLO_WORLD);
    expect(helloWorld).toHaveBeenCalledTimes(3);
  });

  // Hello world example
  test(`With "once", function runs once`, () => {
    const helloWorldOnce = jest.fn(once(helloWorld));
    expect(helloWorldOnce()).toBe(HELLO_WORLD);
    expect(helloWorldOnce()).toBeUndefined();
    expect(helloWorldOnce()).toBeUndefined();
    // Call expectations
    expect(helloWorldOnce).toHaveBeenCalledTimes(3);
    expect(helloWorld).toHaveBeenCalledTimes(1);
  });
});
