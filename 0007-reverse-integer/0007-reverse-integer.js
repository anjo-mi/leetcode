/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x);
    const string = x.toString();
    let reversedString = sign >= 0 
                            ? string.split('').reverse().join('')
                            : string.slice(1).split('').reverse().join('');
    while (reversedString[0] === '0'){
        reversedString = reversedString.slice(1);
    }
    const num = Number(reversedString);
    if (num >= 2**31 || num < -(2**31)) return 0;
    return sign >= 0 ? num : -1 * num;
};