const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if  ((typeof(sampleActivity) !== 'string') || 
    isNaN(parseFloat(sampleActivity)) ||
    (+sampleActivity <= 0) ||
    (+sampleActivity > 15))
  return false

  let num = parseFloat(sampleActivity)
  return (Math.ceil(Math.log(MODERN_ACTIVITY/(num))/(0.693/HALF_LIFE_PERIOD)))
};