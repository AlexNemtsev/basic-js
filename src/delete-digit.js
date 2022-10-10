const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let minIndex = 0;

  const maxDigit = Math.max(...digits);

  if (maxDigit == digits[0]) {
    minIndex = digits.indexOf(Math.min(...(digits.slice(1))).toString());
  } else {
    const maxDigit = digits.indexOf(Math.max(...(digits)).toString());
    minIndex = digits.indexOf(Math.min(...(digits.slice(0, maxDigit))).toString());
  }

  digits.splice(minIndex, 1)
  
  return Number(digits.join(''));
}

module.exports = {
  deleteDigit
};
