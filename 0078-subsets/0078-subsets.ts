function subsets(nums: number[]): number[][] {
    if (!nums.length) return [[]];
    const first:number = nums[0];
    const rem:number[][] = subsets(nums.slice(1));
    const w:number[][] = rem.map(r => [first,...r]);
    return [...w,...rem];
};