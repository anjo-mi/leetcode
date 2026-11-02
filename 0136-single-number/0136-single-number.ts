function singleNumber(nums: number[]): number {
    const counts = nums.reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {} as Record<string,number>);
    for (const num in counts) if (counts[num] === 1) return +num;
    return NaN;
};