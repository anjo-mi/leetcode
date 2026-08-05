function uniquePaths(m: number, n: number,r:number = 1,c:number=1,memo:Record<string,number> = {}): number {
    const key= r + ';' + c;
    if (key in memo) return memo[key];
    if (r > m || c > n) return memo[key] = 0;
    if (r === m && c === n) return memo[key] = 1;
    return memo[key] = uniquePaths(m,n,r+1,c,memo) + uniquePaths(m,n,r,c+1,memo);
};