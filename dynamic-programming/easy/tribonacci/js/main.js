/*
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let init = 0;
    let secInit = 1;
    let thirdInit = 1;
    if (n < 3){
        return n === 2 || n === 1 ? 1 : 0;
    }
    let curr = 0;
    for (let i = 3 ; i <= n ; i++){
        curr = init + secInit + thirdInit;
        init = secInit;
        secInit = thirdInit;
        thirdInit = curr;
    }
    return curr;
};

