function sortedSquares(nums: number[]): number[] {
    return nums.map(el => el * el).sort((a,b) => a-b);
};