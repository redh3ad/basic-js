const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let domainsObj = {};
  let domainsArr = [...domains];
  domainsArr
    .map((domain) =>
      domain
        .split('.')
        .reverse()
        .map((domain) => '.' + domain),
    )
    .forEach((domain) => {
      domain.reduce((sum, cur) => {
        if (!domainsObj[sum + cur]) {
          domainsObj[sum + cur] = 1;
          return sum + cur;
        } else {
          domainsObj[sum + cur] += 1;
          return sum + cur;
        }
      }, '');
    });

  return domainsObj;
  // if (domains.length === 0) {
  //   return domainsObj;
  // }
  // domainsArr.forEach((domain) => {
  //   let tempDomain = domain.split('.').reverse().join('.');
  //   tempDomain = '.' + tempDomain;

  //   if (!domainsObj[tempDomain]) {
  //     domainsObj[tempDomain] = 1;
  //   }

  //   let temp2 = tempDomain.split('.');
  //   temp2.shift();
  //   temp2.pop();

  //   if (temp2.length === 1) {
  //     temp2 = '.' + temp2[0];
  //   } else {
  //     temp2 = temp2.join('.');
  //     temp2 = '.' + temp2;
  //   }

  //   if (!domainsObj[temp2]) {
  //     domainsObj[temp2] = 1;
  //   } else {
  //     domainsObj[temp2] += 1;
  //   }
  // });
  // return domainsObj;
}

module.exports = {
  getDNSStats,
};
