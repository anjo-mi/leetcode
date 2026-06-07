function combinationSum(candidates: number[], target: number): number[][] {
    const results: number[][] = [];
    const backtrack = (index:number = 0, can:number[], rem:number): void => {
        if (rem === 0){
            results.push([...can]);
            return;
        }

        for (let i = index ; i < candidates.length ; i++){
            if (candidates[i] > rem) continue;
            can.push(candidates[i]);
            backtrack(i,can,rem - candidates[i]);
            can.pop();
        }
    }
    backtrack(0,[],target);
    return results;
};
