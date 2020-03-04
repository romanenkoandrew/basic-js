module.exports = function getSeason(date) {
  let result
  if (!date) return result = 'Unable to determine the time of year!'
  if ((Object.prototype.toString.call(date) !== '[object Date]'))
  throw RangeError ('Error')
  
  date.getMonth() < 2 || date.getMonth() == 11 ? result = 'winter' :
  date.getMonth() > 1 && date.getMonth() < 5 ? result = 'spring' :
  date.getMonth() > 4 && date.getMonth() < 8 ? result = 'summer' :
  result = 'autumn'

  return result
};
