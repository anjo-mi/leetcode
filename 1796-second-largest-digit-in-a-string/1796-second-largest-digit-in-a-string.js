/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max = -1,
        secondMax = -1;
    const nums = new Set('0123456789');

    for (const char of s){
        if (nums.has(char)){
            if (+char > max){
                secondMax = max;
                max = +char;
            }
            else if(+char > secondMax && +char < max){
                secondMax = +char;
            }
        }
    }
    return secondMax;
};

/**
set max and second max = -Infinity
iterate thru the string
any time we get a number
check if its larger than max
    this number is the max, and the max becomes the second max


check if second max is finite
yes: -1
no second max
 */