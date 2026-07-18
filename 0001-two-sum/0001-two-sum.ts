function twoSum(nums: number[], target: number): number[] {
    const possPairs:Record<string,number> = {};
    for (let i = 0 ; i < nums.length ; i++){
        const num = nums[i];
        const diff = target - num;
        if (diff in possPairs) return [i,possPairs[diff]];
        possPairs[num] = i;
    }
    return [-1,-1];
};