/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let max = -1n;
    for (let i = 0 ; i < number.length ; i++){
        if (number[i] === digit){
            const num = BigInt(number.slice(0,i) + number.slice(i + 1));
            if (max === -Infinity || num > max) max = num;
        }
    }
    return max.toString();
};