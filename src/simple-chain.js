const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(typeof value === 'undefined' ? '( )' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' 
    || position !== Math.round(position)
    || position > this.chain.length
    || position < 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    if (this.chain.length === 1) return this.chain[0];

    let res = '';

    this.chain.forEach((el, i) => res += (i === 0 ? el : `~~${el}`));

    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
