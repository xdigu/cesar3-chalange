const cipher = require("./cipher");

module.exports = {
  encryptCesar3: phrase => cipher(phrase, 3),
  uncryptCesar3: phrase => cipher(phrase, -3),
  crypt: (phrase, numberToCipher) => cipher(phrase, numberToCipher),
};
