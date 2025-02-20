/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    let firstSeq = 1;
    let secondSeq = 2;
    let total = 0;
    for (let i = 3 ; i <= n ; i++){
        total = firstSeq + secondSeq;
        firstSeq = secondSeq;
        secondSeq = total;
    }
    return total;
};