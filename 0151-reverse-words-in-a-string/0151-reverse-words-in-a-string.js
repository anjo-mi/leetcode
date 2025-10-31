/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.trim().split(' ').map(w => w.trim()).filter(Boolean);
    return words.reverse().join(' ');
};