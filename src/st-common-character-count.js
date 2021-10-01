import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let s1arr = new Array(...s1);
  let s2arr = new Array(...s2);

  let res = 0;

  for (let i = 0; i < s1arr.length; i++) {
    let index = s2arr.indexOf(s1arr[i]);
    if(index !== -1){
      s2arr.splice(index, 1);
      res++;
    }
  }

  return res;
}
