function majorityElement(nums: number[]): number {
    const counts:Record<string,number> = {};
    for (const n of nums){
        counts[n] = (counts[n] || 0) + 1;
        if (counts[n] > nums.length / 2) return n;
    }
    return NaN;
};