/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// const getPerms = nums => {
//     if (!nums.length) return [[]];
//     const perms = [];
//     const num = nums[0];
//     const remains = getPerms(nums.slice(1));
//     for (const rem of remains){
//         for (let i = 0 ; i <= rem.length ; i++){
//             perms.push([...rem.slice(0,i), num, ...rem.slice(i)]);
//         }
//     }
//     return perms;
// }

// const convertAndSortThenConvertBack = perms => {
//     perms = perms.map(perm => Number(perm.join(''))).sort((a,b) => a-b).map(perm => perm.toString().split('').map(Number));
//     return perms;
// }

// const findIndexOfOriginal = (nums,perms) => {
//     for (let i = 0 ; i < perms.length ; i++){
//         const perm = perms[i];
//         for (let j = 0 ; j < perm.length ; j++){
//             if (nums[j] !== perm[j]) break;
//         }
//         return i;
//     }
//     return -1;
// }

// var nextPermutation = function(nums) {
//     const perms = convertAndSortThenConvertBack(getPerms(nums));
//     console.log({perms});
//     let index = findIndexOfOriginal(nums,perms);
//     if (index === -1) return null;
//     if (index === perms.length - 1) index = -1;
//     return perms[index + 1];
// };

var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++; right--;
    }
};