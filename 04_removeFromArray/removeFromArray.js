/**
 * @param {Array} array
 */
const removeFromArray = function(array, ...targets) {
  for (const target of targets) {
    let targetIndex = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        targetIndex = i;
        break;
      }
    }
    if (targetIndex == -1) continue;
    array = array.slice(0, targetIndex).concat(array.slice(targetIndex+1));
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
