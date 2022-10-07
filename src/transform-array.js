const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) return arr;

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      if ((arr[i].endsWith('-prev') && i === 0) || (arr[i].endsWith('-next') && i === arr.length-1)) {
        continue;
      }

      if (arr[i] === '--double-prev' && arr[i - 1] === newArr[newArr.length - 1]) {
        newArr.push(arr[i - 1]);
        continue;
      }

      if (arr[i] === '--discard-prev' && arr[i - 1] === newArr[newArr.length - 1]) {
        newArr.pop();
        continue;
      }

      if (arr[i] === '--double-next') {
        newArr = newArr.concat(arr[i + 1], arr[i + 1]);
        i++;
        continue;
      }

      if (arr[i] === '--discard-next') {
        i += 2;
        continue;
      }
    }

    newArr.push(arr[i]);
  }

  return newArr;
}

module.exports = {
  transform
};
