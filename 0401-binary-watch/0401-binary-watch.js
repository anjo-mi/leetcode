/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const list = [];
    for (let h = 0 ; h < 12 ; h++){
        for (let m = 0 ; m < 60 ; m++){
            const h1s = h.toString(2).split('').reduce((a,el) => a += el === '1' ? 1 : 0,0);
            const m1s = m.toString(2).split('').reduce((a,el) => a += el === '1' ? 1 : 0,0);
            if (h1s + m1s === turnedOn){
                list.push(`${h}:${m.toString().padStart(2,'0')}`)
            }
        }
    }
    return list;
};