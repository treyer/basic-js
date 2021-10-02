import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let checkVariants = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  let res = [];
  for (let i = 0; i < matrix.length; i++) {
      let resString = [];
      for (let j = 0; j < matrix[0].length; j++) {
            let sum = 0;
            for (let m = 0; m < checkVariants.length; m++) {
                  if (matrix[i + checkVariants[m][0]] !== undefined && 
                     matrix[i + checkVariants[m][0]][j + checkVariants[m][1]] !== undefined){
                        if(matrix[i + checkVariants[m][0]][j + checkVariants[m][1]] === true){
                              sum++;
                        } 
                     }
            }
            resString.push(sum);
      }
      res.push(resString);
  }

  return res;
}
