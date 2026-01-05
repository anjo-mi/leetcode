/**
 * @param {string} s
 * @return {number}
 */

const singleCharsOnlyCheck = s => {
    const counts = s.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {});
    return Object.values(counts).every(count => count < 2);
}

var lengthOfLongestSubstring = function(s) {
    let max = 0,
        i = 0,
        j = 1;
    while (j <= s.length){
        const sub = s.slice(i,j);
        if (singleCharsOnlyCheck(sub)) max = Math.max(sub.length,max);
        else{
            i = sub.indexOf(s[j-1]) + i + 1;
            continue;
        }
        j++;
    }
    return max;
};