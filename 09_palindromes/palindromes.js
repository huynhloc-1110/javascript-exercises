/**
 * 
 * @param {string} str 
 */
const palindromes = function (str) {
  let cleanedStr = str
    .toLowerCase()
    .split('')
    .filter(char => char <= 'z' && char >= 'a')
    .join('');
  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr.charAt(i) != cleanedStr.charAt(cleanedStr.length-i-1)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
