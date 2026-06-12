function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a,b) => a-b);
    const res:number[][] = [];

    const iterator = (ind: number, nums: number[], curr: number): void => {
        if (curr === 0) { res.push([...nums]); return; }
        for (let i = ind; i < candidates.length; i++) {
            if (i > ind && candidates[i] === candidates[i-1]) continue;
            if (candidates[i] > curr) break;
            nums.push(candidates[i]);
            iterator(i+1, nums, curr - candidates[i]);
            nums.pop();
        }
    };
    iterator(0,[],target);
    const map = new Map<string,number[]>();
    for (const opt of res){
        const key = opt.sort((a,b) => a-b).join(';');
        map.set(key,opt);
    }
    const result:number[][] = [];
    console.log({map})
    for (const [key,val] of map) result.push(val);
    return result;
};
