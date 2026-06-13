/**
 * @param {number} n
 * @return {string}
 */

const rle = (s) => {
    let i = 0, j = 1, str = '';
    while (j <= s.length){
        while (s[i] === s[j]) j++;
        const portion = s.slice(i,j);
        str += portion.length + portion[0];
        i = j;
        j++;
    }
    return str;
}

var countAndSay = function(n) {
    let x = 1;
    let s = '1';
    while (x < n){
        s = rle(s);
        x++;
    }
    return s;
};