/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const res = [];
    const map1 = nums1.reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    },{})

    const map2 = nums2.reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    },{})

    for (const num in map1){
        const n1val = map1[num];
        const n2val = map2[num] || 0;
        let min = Math.min(n1val,n2val);
        while (min){
            res.push(+num);
            min--;
        }
    }
    return res;
};