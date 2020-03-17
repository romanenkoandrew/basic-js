module.exports = class DepthCalculator {
    calculateDepth(arr) {
    let counter = 0
    if (Array.isArray(arr)){
        let maxValue = counter;
        arr.forEach(el=> {
        let currentValue =  this.calculateDepth(el);
        if(currentValue > maxValue) maxValue = currentValue;
        })
        counter =  ++maxValue
    }
    return counter
    }
}