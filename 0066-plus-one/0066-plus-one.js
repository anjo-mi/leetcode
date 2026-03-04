/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;
    for (let i = digits.length - 1 ; i >= 0 ; i--){
        if (i === digits.length - 1) digits[i] += 1;
        else {
            if (!carry) break;
            digits[i] += carry;
        }
        carry = Math.floor(digits[i] / 10);
        digits[i] = digits[i] % 10;
    }
    return carry ? [carry].concat(digits) : digits;
};

