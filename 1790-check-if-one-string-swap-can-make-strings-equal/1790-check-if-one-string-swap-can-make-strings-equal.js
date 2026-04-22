/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    s1 = s1.split('');
    s2 = s2.split('');
    for (let i = 0 ; i < s2.length ; i++){
        const copy = s2.slice(0,i).concat(s2.slice(i));
        for (let j = i+1 ; j < s2.length ; j++){
            [copy[i], copy[j]] = [copy[j], copy[i]];
            if (copy.every((el,i) => el === s1[i])) return true;
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
    }
    return false;
};