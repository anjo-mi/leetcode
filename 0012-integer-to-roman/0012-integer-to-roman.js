/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romans = '';
    if (num >= 1000){
        const ms = Math.floor(num / 1000);
        num -= (ms * 1000);
        romans += 'M'.repeat(ms);
    }
    if (num >= 500){
        if (num >= 900){
            romans += 'CM';
            num -= 900;
        }else{
            romans += 'D';
            num -= 500;
        }
    }
    if (num >= 100){
        const cs = Math.floor(num / 100);
        num -= (cs * 100);
        romans += cs === 4 ? 'CD' : 'C'.repeat(cs);
    }
    if (num >= 50){
        if (num >= 90){
            romans += 'XC';
            num -= 90;
        }else {
            romans += 'L';
            num -= 50;
        }
    }
    if (num >= 10){
        const xs = Math.floor(num / 10);
        num -= (xs * 10);
        romans += xs === 4 ? 'XL' : 'X'.repeat(xs);
    }
    if (num >= 5){
        if (num === 9){
            romans += 'IX';
            return romans;
        }
        romans += 'V';
        num -= 5;
    }
    romans += num === 4 ? 'IV' : 'I'.repeat(num);
    return romans;
};
