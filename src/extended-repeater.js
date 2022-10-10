const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const arr = [];
  const adds = [];
  let addStr = '';
  const rT = (typeof options.repeatTimes === 'undefined' ? 1 : options.repeatTimes);
  const aRT = (typeof options.additionRepeatTimes === 'undefined' ? 1 : options.additionRepeatTimes);
  const separator = (typeof options.separator === 'undefined' ? '+' : options.separator);
  const addSeparator = (typeof options.additionSeparator === 'undefined' ? '|' : options.additionSeparator);

  if (typeof options.addition !== 'undefined') {
    for (let i = 0; i < aRT; i++) {
      adds.push(options.addition);
    }

    addStr = (adds.length === 1 ? (adds[0]) : adds.join(addSeparator));
  }

  for (let i = 0; i < rT; i++) {
    arr.push(str + addStr);
  }

  return arr.length === 1 ? arr[0] : arr.join(separator);
}

module.exports = {
  repeater
};
