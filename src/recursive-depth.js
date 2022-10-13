const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const depths = arr.map(el => {
      if (Array.isArray(el)) {
        if (el.length === 0) return 2;

        return this.calculateDepth(el) + 1;
      }

      return 1;
    });

    return Math.max(...depths);
  }
}

module.exports = {
  DepthCalculator
};
