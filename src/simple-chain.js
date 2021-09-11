import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink( value ) {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink( position ) {
    if (! Number.isInteger(position) || position <= 0 || position > this.arr.length) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    let arr1 = [];
    for (let i = this.arr.length - 1; i >= 0; i--) {
      arr1.push(this.arr[i]);
    }
    this.arr = arr1;
    return this;
  },

  finishChain() {
    let str = '';
    for (let i = 0; i < this.arr.length; i++) {
      if (i !== this.arr.length - 1){
        str += `${this.arr[i]}~~`;
      } else {
        str += `${this.arr[i]}`;
      }
    }
    this.arr = [];
    return str;
  }

};