/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groupings = strs.reduce((a,el) => {
        const key = el.split('').sort().join('');
        if (!a[key]) a[key] = [];
        a[key].push(el);
        return a;
    }, {})
    return Object.values(groupings);
};