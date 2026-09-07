function combinationSum(cans: number[], target: number): number[][] {
    cans.sort((a,b) => a-b);
    const res:number[][] = [];
    if (target < 0 || !cans.length) return res;
    const first = cans[0];
    if (target === first) return [[first]];
    const w:number[][] = combinationSum(cans,target - first);
    const wo:number[][] = combinationSum(cans.slice(1),target);
    for (const ans of w) res.push([first,...ans]);
    for (const ans of wo) res.push([...ans]);
    return res;
};