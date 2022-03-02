const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(type) {
    if (type != false) {
      this.type = true;
    } else {
      this.type = false;
    }
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    else {
      let i = 0;
      let n = [];
      message = this.type ? message : message.split('').reverse().join('');
      message = message.split('').map((elem, index) => {
        if (
          (elem.codePointAt() > 64 && elem.codePointAt() < 91) ||
          (elem.codePointAt() > 96 && elem.codePointAt() < 123)
        ) {
          n.push(
            String.fromCharCode(
              ((elem.toLowerCase().charCodeAt() +
                key
                  .toLowerCase()
                  .codePointAt(Math.abs(index - i) % key.length) -
                64) %
                26) +
                65,
            ),
          );
        } else {
          n.push(elem);
          i++;
        }
        return n.join('');
      })[message.split('').length - 1];
      return message;
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    let i = 0;
    let k = [];
    encryptedMessage = this.type
      ? encryptedMessage
      : encryptedMessage.split('').reverse().join('');
    encryptedMessage = encryptedMessage
      .split('')
      .map((elem, index) => {
        if (elem.codePointAt() > 64 && elem.codePointAt() < 91) {
          k.push(
            String.fromCodePoint(
              (Math.abs(
                elem.toLowerCase().codePointAt() -
                  key
                    .toLowerCase()
                    .codePointAt(Math.abs(index - i) % key.length) +
                  26,
              ) %
                26) +
                65,
            ),
          );
        } else {
          k.push(elem);
          i++;
        }
        return k.join('');
      })
      [encryptedMessage.split('').length - 1].toUpperCase();
    return encryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
