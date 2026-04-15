/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(note, mag) {
    const noteCounts = note.split('').reduce((a,el) => {
        if (!el) return a;
        a[el] = (a[el] || 0) + 1;
        return a;
    },{});
    const magCounts = mag.split('').reduce((a,el) => {
        if (!el) return a;
        a[el] = (a[el] || 0) + 1;
        return a;
    },{});
    for (const letter in magCounts){
        if (letter in noteCounts) noteCounts[letter] -= magCounts[letter];
    }
    for (const letter in noteCounts){
        if (noteCounts[letter] > 0) return false;
    }
    return true;
};