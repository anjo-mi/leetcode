const inBounds = (r:number,c:number,grid:number[][]):boolean => {
    return r >= 0 && r < grid.length &&
           c >= 0 && c < grid[r].length;
}

function minPathSum(
    grid: number[][],
    r:number=0,
    c:number=0,
    memo:Record<string,number> = {}
): number {
    const key:string = r+';'+c;
    if (!inBounds(r,c,grid)) return memo[key] = Infinity;
    if (key in memo) return memo[key];
    if (r === grid.length - 1 && c === grid[r].length - 1) return memo[key] = grid[r][c];
    return memo[key] = grid[r][c] + Math.min(
        minPathSum(grid,r+1,c,memo),
        minPathSum(grid,r,c+1,memo)
    );
};