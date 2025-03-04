
/*
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const totals = {};
    const merged = [];
    for (const nest of nums1.concat(nums2)){
        totals[nest[0]] = ( totals[nest[0]] || 0 ) + nest[1];
    }
    for (const total in totals){
        merged.push([+total, totals[total]]);
    }
    return merged;
};