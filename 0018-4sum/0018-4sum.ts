function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    return kSum(nums, target, 4);
}

function kSum(nums: number[], target: number, k: number): number[][] {
    if (k === 2) return twoSum(nums, target);
    
    const result = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const subs = kSum(nums.slice(i + 1), target - nums[i], k - 1);
        for (const sub of subs) result.push([nums[i], ...sub]);
    }
    return result;
}

function twoSum(nums: number[], target: number): number[][] {
    const result = [];
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum === target) {
            result.push([nums[l], nums[r]]);
            while (nums[l] === nums[l+1]) l++;
            while (nums[r] === nums[r-1]) r--;
            l++; r--;
        } else if (sum < target) l++;
        else r--;
    }
    return result;
}