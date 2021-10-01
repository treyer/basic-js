import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  
  calculateDepth(arr) {
    let deepArraysIndexes = this.checkDeep(arr);
    if (deepArraysIndexes.length === 0){
        return 1;
    } else {
        let innerArraysDepthes = [];
        for (let i = 0; i < deepArraysIndexes.length; i++) {
          innerArraysDepthes.push(this.calculateDepth(arr[deepArraysIndexes[i]]));
        }     
        return 1 + Math.max( ...innerArraysDepthes);
    }
  }

  checkDeep = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
            res.push(i);
        }
    }
    return res;
  }

}
