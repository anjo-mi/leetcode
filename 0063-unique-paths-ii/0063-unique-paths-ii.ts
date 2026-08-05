function uniquePathsWithObstacles(grid:number[][],r:number = 0,c:number=0,memo:Record<string,number> = {}): number {
    const key= r + ';' + c;
    const m = grid.length - 1,
          n = grid[m].length - 1;
    if (key in memo) return memo[key];
    if (r > m || c > n) return memo[key] = 0;
    if (grid[r][c] === 1) return memo[key] = 0;
    if (r === m && c === n) return memo[key] = 1;
    return memo[key] = uniquePathsWithObstacles(grid,r+1,c,memo) + uniquePathsWithObstacles(grid,r,c+1,memo);
};