function findDuplicate(nums: number[]): number {
    const store:Record<string,number> = {};
    for (const num of nums) {
        if (num in store) return num;
        store[num] = 1;
    }
    return NaN;
};