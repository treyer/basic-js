import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
   let digitsArr = [];
   for (let i = 0; i < String(n).length; i++) {
     let arr = String(n).split('');
     arr.splice(i, 1);
     arr.join('');
    digitsArr.push(+arr.join(''))
   }

   return Math.max(...digitsArr);
}
