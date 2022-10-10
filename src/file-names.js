const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const checked = {}
  const output = [];

  names.forEach((name) => {
    if (!checked.hasOwnProperty(name) && !output.includes(name)) {
      checked[name] = 0;
      output.push(name);
    } else if (checked.hasOwnProperty(name)) {
      checked[name]++;
      output.push(`${name}(${checked[name]})`);
    } else if (!checked.hasOwnProperty(name) && output.includes(name)) {
      checked[name] = 1;
      output.push(`${name}(${checked[name]})`);
    }
  });

  return output;
}

module.exports = {
  renameFiles
};
