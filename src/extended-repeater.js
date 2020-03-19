module.exports = function repeater(str, options) {
   
     let repeatTimes = options.repeatTimes;
     let separator = options.separator || '+';
     let addition = options.addition;
     let additionRepeatTimes = options.additionRepeatTimes;
     let additionSeparator = options.additionSeparator || '|';
     let newStr = ''
     // Проверка addition
     typeof(addition) == 'boolean' ? addition = addition.toString() :
     addition === null ? addition ='null' : 
     addition
     // Получение добавочной строки
     newStr = (addition + additionSeparator).repeat(additionRepeatTimes-1) + addition;
     // Получение конечной строки
     addition ? str = (str + newStr + separator).repeat(repeatTimes-1) + str+newStr : str = (str + separator).repeat(repeatTimes-1) + str
      
     return str
};
  