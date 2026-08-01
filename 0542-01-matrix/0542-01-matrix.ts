const dirs:number[][] = [ [-1,0] , [0,-1] , [1,0] , [0,1] ];
const inBounds = (r:number,c:number,grid):boolean => grid[r]?.[c] || grid[r]?.[c] === 0;

function updateMatrix(grid: number[][]): number[][] {
    const rows = grid.length;
    const cols = grid[0].length;
    const dist: number[][] = grid.map(row => row.map(() => Infinity));
    const q: number[][] = [];
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if (grid[r][c] === 0){
                dist[r][c] = 0;
                q.push([r,c]);
            }
        }
    }
    let head = 0;
    while (head < q.length){
        const [r,c] = q[head++];
        for (const [dr,dc] of dirs){
            const nr = r + dr, nc = c + dc;
            if (!inBounds(nr,nc,grid)) continue;
            if (dist[nr][nc] > dist[r][c] + 1){
                dist[nr][nc] = dist[r][c] + 1;
                q.push([nr,nc]);
            }
        }
    }
    return dist;
}