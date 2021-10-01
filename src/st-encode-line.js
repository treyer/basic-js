import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {

  //to solve task used my ready decision of appropriate codevars part 1 task

  let arr = [];
    let currentEl;
    let sumOfCurrentEl = 0;

    for (let i = 0; i < str.length; i++) {
        console.log(`i= ${i}`);
        if (str.length === 1) return [1, str[0]];
        if (i === 0){
            currentEl = str[i];
            sumOfCurrentEl = 1;
        } else if (i === str.length - 1){
            if (str[i] === currentEl){
                arr.push([++sumOfCurrentEl, currentEl])
            } else {
                arr.push([sumOfCurrentEl, currentEl]);
                arr.push([1, str[i]]);
            }
        } else {
            if (str[i] === currentEl){
                sumOfCurrentEl++;
            } else {
                arr.push([sumOfCurrentEl, currentEl]);
                currentEl = str[i];
                sumOfCurrentEl = 1;
            }
        }
    }

    let res = '';
    arr.forEach(el => {
      if (el[0] !== 1){
        res += el[0];
      }
      res += el[1];
    });

    return res;
}
