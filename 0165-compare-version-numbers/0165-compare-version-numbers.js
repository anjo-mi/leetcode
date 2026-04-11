/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(v1, v2) {
    v1 = v1.split('.').map(Number);
    v2 = v2.split('.').map(Number);
    for (var i = 0 ; i < v1.length ; i++){
        if (i >= v2.length && v1.slice(i).some(Boolean)) return 1;
        const pt1 = v1[i]
        const pt2 = v2[i]
        if (pt1 > pt2) return 1;
        if (pt1 < pt2) return -1;
    }
    return v2[i] || v2.slice(i).some(Boolean) ? -1 : 0;
};