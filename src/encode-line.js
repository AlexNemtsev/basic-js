const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let prev = ''
  let counter = 1;

  for (let char of str) {
    if (char !== prev) {
      encoded += `${counter === 1 ? '' : counter}${prev}`;
      prev = char;
      counter = 1;
    } else {
      counter++;
    }
  }

  encoded += `${counter === 1 ? '' : counter}${prev}`;

  return encoded;
}

module.exports = {
  encodeLine
};
