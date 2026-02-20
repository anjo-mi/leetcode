/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    const sign = s[0] === '-' ? -1 : 1;
    if (sign < 0 || s[0] === '+') s = s.slice(1);
    const digits = new Set('0123456789.');
    let res = '';
    let hasDecimal = false;
    for (let i = 0 ; i < s.length ; i++){
        const char = s[i];
        if (!res && char === '0') continue;
        if (!digits.has(char)) break;
        if (char === '.' && hasDecimal) break;
        if (char === '.') hasDecimal = true;
        res += char;
    }
    res = Number(res);
    if (res >= 2**31){
        res = 2**31;
        res += sign >= 0 ? -1 : 0;
    }
    return sign >= 0 ? Math.round(res) : Math.round(-1 * res);
};
