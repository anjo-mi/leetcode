/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */


const INT_MAX = 2147483647;
const INT_MIN = -2147483648

var divide = function(dividend, divisor) {
    const sign = Math.sign(dividend) === Math.sign(divisor) ? 1 : -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend < divisor) return 0;
    let count = 0;
    while (dividend >= divisor) {
        let temp = divisor;
        let multiple = 1;
        while ((temp << 1) > 0 && (temp << 1) <= dividend) {
            temp <<= 1;
            multiple <<= 1;
        }
        dividend -= temp;
        count += multiple;
    }
    count = sign === 1 ? count : -count;
    if (count > INT_MAX) return INT_MAX;
    if (count < INT_MIN) return INT_MIN;
    return count;
};