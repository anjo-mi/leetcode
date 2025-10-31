/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.trim().split(' ').map(w => w.trim()).filter(Boolean);
    console.log({words})
    return words.reverse().join(' ');
};