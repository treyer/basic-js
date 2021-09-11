import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if (! Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arrCopy = arr.slice();
  while(true){
    let isChanges = false;
      for (let i = 0; i < arrCopy.length; i++) {
        if(arrCopy[i] === '--discard-next'){
          isChanges = true;
          if (i === arrCopy.length - 1){
            arrCopy = arrCopy.slice(0, -1);
            break;
          } else {
            arrCopy.splice(i, 2, 'x');
            break;
          }
        } else if(arrCopy[i] === '--discard-prev'){
          isChanges = true;
          if (i == 0) {
            arrCopy.splice(0, 1);
            break;
          } else {
            arrCopy.splice(i - 1, 2);
            break;
          }
        } else if(arrCopy[i] === '--double-next'){
          isChanges = true;
          if (i + 1 === arrCopy.length){
            arrCopy = arrCopy.slice(0, -1);
            break;
          } else {
            arrCopy.splice(i, 1, arrCopy[i + 1]);
            break;
          }
        } else if(arrCopy[i] === '--double-prev'){
          isChanges = true;
          if (i > 0){
            if (arrCopy[i - 1] !== 'x'){
              arrCopy.splice(i, 1, arrCopy[i - 1]);
              break;
            } else {
              arrCopy.splice(i, 1);
              break;
            }
          } else {
            arrCopy.splice(0, 1);
            isChanges = true;
            break;
          }
        }
      }
      if (! isChanges) break;
  }
  for (let j = 0; j < arrCopy.length; j++) {
    if (arrCopy[j] === 'x') arrCopy.splice(j, 1);
  }
  return arrCopy;
}
