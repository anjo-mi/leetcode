/*
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n;
    let prev = 1;
    let twoPrev = 0;
    let curr = 0;
    for (let i = 2 ; i <= n ; i++){
        curr = twoPrev + prev;
        twoPrev = prev;
        prev = curr;
    }
    return curr;
};