/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(cites) {
    cites.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < cites.length; i++) {
        if (cites[i] >= i + 1) h = i + 1;
        else break;
    }
    return h;
};
