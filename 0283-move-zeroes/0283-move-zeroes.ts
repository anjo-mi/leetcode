/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0;
    while (i < nums.length){
        while (nums[i] && i < nums.length) i++;
        if (i < nums.length){
            let j = i + 1;
            while (j < nums.length && !nums[j]) j++;
            if (j < nums.length){
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            i++;
        }
    }
};