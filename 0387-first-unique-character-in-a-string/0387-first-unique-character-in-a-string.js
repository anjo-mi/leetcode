/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = s.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {});
    for (let i = 0 ; i < s.length ; i++) if (map[s[i]] === 1) return i;
    return -1;
};