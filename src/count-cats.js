module.exports = function countCats(matrix) {
  let cats = '^^',
  result = 0
  let arr = [].concat(...matrix)
  arr.forEach(e=> e == cats ? result+=1 : result )
  return result
};
