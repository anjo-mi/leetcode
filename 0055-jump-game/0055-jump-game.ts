function canJump(nums: number[]): boolean {
    let curr = nums[0];
    for (let i = 1 ; i < nums.length ; i++){
        if (curr === 0) return false;
        curr = Math.max(curr-1,nums[i]);
    }
    return true;
};
