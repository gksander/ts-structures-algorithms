/**
 * Function that executes f once, and g thereafter
 * @param f
 * @param g
 */
export const onceAndAfter = <I extends any[], O>(
  f: (...args1: I) => O,
  g: (...args2: I) => O | void = () => {},
) => {
  let hasRun = false;
  return (...args: I): O | void => {
    if (!hasRun) {
      hasRun = true;
      return f(...args);
    } else {
      return g(...args);
    }
  };
};
