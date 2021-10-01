import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let reverseDomains = [];
    domains.forEach(domain => {
        reverseDomains.push(domain.split('.').reverse());
    });
    let res = {};
    reverseDomains.forEach(domain => {
      let propName = '';
      for (let i = 0; i < domain.length; i++) { 
         propName += `.${domain[i]}`;
         if (res.hasOwnProperty(propName)){
           res[propName] = ++res[propName];
         } else {
          res[propName] = 1;
         }
      }
    });
    
    return res;
}

