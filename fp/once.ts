/**
 * Function that executes a passed fn only once
 * @param fn Function
 */
export const once = <T extends Array<any>, U>(fn: (...args: T) => U) => {
  let hasRun = false;
  return (...args: T): U | void => {
    if (!hasRun) {
      hasRun = true;
      return fn(...args);
    }
  };
};
