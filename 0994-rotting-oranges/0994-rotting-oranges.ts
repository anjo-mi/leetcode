function orangesRotting(grid: number[][], count:number = 0): number {
    const dirs = [
        [0,1],
        [-1,0],
        [1,0],
        [0,-1]
    ];
    const res:number[][] = Array(grid.length).fill(null).map(item => []);
    let changed:boolean = false;
    for (let r = 0 ; r < grid.length ; r++){
        for (let c = 0 ; c < grid[r].length ; c++){
            for (const [dr,dc] of dirs){
                if (grid[r][c] === 1 && grid[dr+r]?.[dc+c] === 2){
                    res[r][c] = 2;
                    changed = true;
                    break;
                }else res[r][c] = grid[r][c];
            }
        }
    }
    if (!changed){
        if (res.every(row => row.every(item => item !== 1))) return count;
        else return -1;
    }
    return orangesRotting(res,count+1);
};