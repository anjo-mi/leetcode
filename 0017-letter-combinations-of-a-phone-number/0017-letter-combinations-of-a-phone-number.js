/**
 * @param {string} digits
 * @return {string[]}
 */
const pad = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
}

var letterCombinations = function(digs, i = 0) {
    if (i === digs.length) return [''];
    const arr = [];
    const dig = digs[i];
    console.log({dig})
    for (const char of (pad[dig])){
        const rems = letterCombinations(digs,i+1);
        for (const rem of rems){
            arr.push( char + rem)
        }
    }
    return arr;
};