/*
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    for (let i = 0 ; i < nums1.length ; i++){
        const id = nums1[i][0]
        if (nums2.some(pair => pair[0] === id)){
            nums1[i][1] += nums2[nums2.findIndex(el => el[0] === id)][1]
        }
    }
    return nums1.concat(nums2.filter(pair => !nums1.some(group => group[0] === pair[0]))).sort((a,b) => a[0] - b[0])
};