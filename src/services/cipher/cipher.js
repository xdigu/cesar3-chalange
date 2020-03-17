const alphabetic = require("../../constants/alphabetic");

/**
 * @param {String} phrase phrase to cipher
 * @param {Number} numberToCipher number to cipher
 */
function cipher(phrase, numberToCipher) {
  const newPhrase = [];
  phrase.split("").forEach(letter => {
    const letterIndex = alphabetic.indexOf(letter);

    if (letterIndex === -1) return newPhrase.push(letter);

    const letterIndexCiphered = letterIndex + numberToCipher;
    // console.log(alphabetic.length - letterIndexCiphered);

    if (letterIndexCiphered < 0)
      return newPhrase.push(
        alphabetic[alphabetic.length + letterIndexCiphered]
      );

    if (letterIndexCiphered > alphabetic.length)
      return newPhrase.push(
        alphabetic[letterIndexCiphered - alphabetic.length]
      );

    return newPhrase.push(alphabetic[letterIndexCiphered]);
  });

  return newPhrase.join("");
}

module.exports = cipher;
