const reverseString = function(string) {
  let stringArr = string.split("");
  let result = "";
  for (let i = stringArr.length - 1; i >= 0; i--) {
    result += stringArr[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
