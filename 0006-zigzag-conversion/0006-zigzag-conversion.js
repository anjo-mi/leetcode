/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;
    if (numRows < 1) return '';
    const cycleLen = numRows + numRows - 2;
    const fullCycles = Math.floor(s.length / cycleLen);
    const remaining = s.length % cycleLen;
    const remainingCols = remaining === 0 ? 0 : (remaining <= numRows ? 1 : 1 + (remaining - numRows));
    const totalCols = fullCycles * (numRows - 1) + remainingCols;
    const arr = Array(numRows).fill(null).map(el => Array(totalCols).fill(null));
    let row = 0,
        col = 0,
        down = true;
    for (const char of s){
        if (!down) col++;
        if (!row) down = true;
        arr[row][col] = char;

        if (row < numRows - 1 && down){
            row++;
            continue;
        }
        if (row === numRows - 1){
            row--;
            down = false;
            continue;
        }
        if (row < numRows && !down){
            row--;
            continue;
        }
    }
    return arr.map(line => line.filter(Boolean).join('')).join('');
};