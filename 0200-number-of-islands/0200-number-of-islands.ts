const inBounds = (grid:string[][], r:number,c:number):boolean => {
    if (r < 0 || c < 0) return false;
    if (r >= grid.length || c >= grid[r].length) return false;
    return true;
};

const isLand = (grid:string[][], r:number,c:number):boolean => {
    if (!inBounds(grid,r,c)) return false;
    return grid[r][c] === "1";
};

const dirs:number[][] = [
    [1,0],
    [-1,0],
    [0,-1],
    [0,1]
];

function numIslands(grid: string[][]): number {
    const set = new Set<string>();
    let islands = 0;
    for (let r = 0 ; r < grid.length ; r++){
        for (let c = 0 ; c < grid[r].length ; c++){
            if (!isLand(grid,r,c)) continue;
            const q:any[] = [{r,c}];
            const k = r + ';' + c;
            if (set.has(k)) continue;
            while (q.length){
                const {r,c} = q.shift();
                const k = r + ';' + c;
                if (set.has(k)) continue;
                set.add(k);
                for (const [dr,dc] of dirs){
                    if (isLand(grid,dr+r,dc+c)) q.push({r:r+dr, c:c+dc});
                }
            }
            islands++;
        }
    }
    return islands;
};