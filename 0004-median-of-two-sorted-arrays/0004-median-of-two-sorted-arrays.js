/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const median = Math.floor(totalLength / 2);

    let i = 0,
        j = 0,
        curr,
        prev;
    while (i + j <= median){
        prev = curr;
        if (i >= nums1.length){
            curr = nums2[j];
            j++;
        }else if(j >= nums2.length){
            curr = nums1[i];
            i++;
        }else if (nums1[i] < nums2[j]){
            curr = nums1[i];
            i++;
        }else{
            curr = nums2[j];
            j++;
        }
    }
    return totalLength % 2 ? curr : (curr + prev) / 2;
};