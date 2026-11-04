interface IStep {
    step: number;
    path: number[];
}

// function climbStairs(n: number): number {
//     if (n <= 2) return n;
//     const paths: number[] = [0, 1, 2];
//     for (let i = 3; i <= n; i++) {
//         paths[i] = paths[i - 1] + paths[i - 2];
//     }
//     return paths[n];
// }
function climbStairs(n: number, memo:Record<string,number> = {}): number {
    if (n === 0) return 1;
    if (n <   0) return 0;
    if (n in memo) return memo[n];

    return memo[n] = climbStairs(n-1,memo) + climbStairs(n-2,memo);
}