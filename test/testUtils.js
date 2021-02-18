/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */

export const findByTestAdder = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
