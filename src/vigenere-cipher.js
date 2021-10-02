import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  
  // Sorry, but I have no time to make code beautiful and cut it

  constructor(isDirect = true){
    this.isDirect = isDirect;
    
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
  
    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyString = '';
    if (key.length > message.length){
       keyString = key.slice(0, message.length);
    } else {
      let times = Math.floor(message.length / key.length);
      for (let i = 0; i < times + 1; i++) {
        keyString += key;
      }
      keyString = keyString.slice(0, message.length);
    }
    //solve problem with no-latin simbols in key map
    let keyStringArr = keyString.split('');
    let arr1 = [];
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
        arr1.push(keyStringArr.shift());
      } else {
        arr1.push("n");
      }
    }

    keyString = arr1.join('');
    
    let keyStringOffsets = [];
    for (let i = 0; i < keyString.length; i++) {
          keyStringOffsets.push(keyString.charCodeAt(i) - 65);
    }
    console.log(keyStringOffsets);

    let encryptedString = [];
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
        let code = message.charCodeAt(i) + keyStringOffsets[i];
         if (code > 90) code = code - 26;
         encryptedString.push(String.fromCharCode(code));
      } else {
        encryptedString.push(message[i]);
      }
    }

    return this.isDirect ? encryptedString.join('') : encryptedString.reverse().join('');  

  }


  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");

      message = message.toUpperCase();
      key = key.toUpperCase();
  
      let keyString = '';
      if (key.length > message.length){
         keyString = key.slice(0, message.length);
      } else {
        let times = Math.floor(message.length / key.length);
        for (let i = 0; i < times + 1; i++) {
          keyString += key;
        }
        keyString = keyString.slice(0, message.length);
      }
      //solve problem with no-latin simbols in key map
      let keyStringArr = keyString.split('');
      let arr1 = [];
      for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
          arr1.push(keyStringArr.shift());
        } else {
          arr1.push("n");
        }
      }

      keyString = arr1.join('');
      
      let keyStringOffsets = [];
      for (let i = 0; i < keyString.length; i++) {
            keyStringOffsets.push(keyString.charCodeAt(i) - 65);
      }
      console.log(keyStringOffsets);

      let decryptedString = [];
      for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
          let code = message.charCodeAt(i) - keyStringOffsets[i];
           if (code < 65) code = code + 26;
           decryptedString.push(String.fromCharCode(code));
        } else {
          decryptedString.push(message[i]);
        }
      }

      return this.isDirect ? decryptedString.join('') : decryptedString.reverse().join('');

  }
}
