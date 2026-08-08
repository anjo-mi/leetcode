interface IStep {
    step: number;
    path: number[];
}

// function climbStairs(n: number): number {
//     const paths:number[][] = [];
//     const q:IStep[] = [{step:0, path: [0]}];
//     while (q.length){
//         const {step,path} = q.pop();
//         if (step === n) {paths.push(path);}
//         if (step + 1 <= n) q.push({step:step+1,path:[...path,step]});
//         if (step + 2 <= n) q.push({step:step+2,path:[...path,step]});
//     }
//     return paths.length;
// };

function climbStairs(n: number): number {
    if (n <= 2) return n;
    const paths: number[] = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        paths[i] = paths[i - 1] + paths[i - 2];
    }
    return paths[n];
}