import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let additionString = '';
  if (options.hasOwnProperty('addition')){
    let addition = String(options.addition);
    let additionSeparator = (options.hasOwnProperty("additionSeparator")) ? options.additionSeparator : "|";
    let additionRepeatTimes = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1;
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (additionRepeatTimes === 1){
        additionString = addition;
      } else {
        (i < options.additionRepeatTimes - 1) ? additionString += addition + additionSeparator : additionString += addition;
      }
    }
  }

  let res = '';
  let repeatTimes = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1;
  let separator = (options.hasOwnProperty('separator')) ? options.separator : "+";
  str = String(str);
  for (let i = 0; i < repeatTimes; i++) {
    (i < options.repeatTimes - 1) ? res += str + additionString + separator : res += str + additionString;
  }

  return res;
}
