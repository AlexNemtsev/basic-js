const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(isDirect = true) {
    this.isReversed = !isDirect;
  }

  encrypt(...rest) {
    if (rest.length < 2 || rest.includes(undefined)) throw new Error('Incorrect arguments!');

    const msg = rest[0].toUpperCase();
    const key = rest[1].toUpperCase();
    let enc = '';
    let i = 0;

    for (let char of msg) {
      if (this.alphabet.includes(char)) {
        const shift = key.charCodeAt(i) - this.alphabet.charCodeAt(0);
        const shiftedCode = char.charCodeAt(0) + shift;
        const shifted = String.fromCharCode(shiftedCode > 90 ? shiftedCode + 6 : shiftedCode).toUpperCase();

        enc += shifted;

        i = (i + 1) % key.length;
      } else {
        enc += char;
      }
    }

    return this.isReversed ? enc.split('').reverse().join('') : enc;
  }

  decrypt(...rest) {
    if (rest.length < 2 || rest.includes(undefined)) throw new Error('Incorrect arguments!');
    
    const msg = rest[0].toLowerCase();
    const key = rest[1].toUpperCase();
    let dec = '';
    let i = 0;

    for (let char of msg) {
      if (this.alphabet.toLowerCase().includes(char)) {
        const shift = key.charCodeAt(i) - this.alphabet.charCodeAt(0);
        const shiftedCode = char.charCodeAt(0) - shift;
        const shifted = String.fromCharCode(shiftedCode < 97 ? shiftedCode - 6 : shiftedCode).toUpperCase();

        dec += shifted;

        i = (i + 1) % key.length;
      } else {
        dec += char;
      }
    }

    return this.isReversed ? dec.split('').reverse().join('') : dec;
  }
}

module.exports = {
  VigenereCipheringMachine
};
