function missingNumber(nums: number[]): number {
    nums.sort((a,b) => a-b);
    let curr = nums[0];
    if (curr === 1) return 0;
    for (let i = 1 ; i < nums.length ; i++){
        if (curr + 1 !== nums[i]) return curr + 1;
        curr = nums[i]
    }
    return nums[nums.length - 1] + 1;
};