// const inBounds = (grid:string[][], r:number,c:number):boolean => Boolean(grid[r]?.[c]);
// const dirs:number[][] = [ [1,0] , [0,1]  , [-1,0] , [0,-1] ];

// function exist(grid: string[][], word: string): boolean {
//     const ends:Record<string, string[]> = {};
//     for (let r = 0 ; r < grid.length ; r++){
//         for (let c = 0 ; c < grid[r].length ; c++){
//             const q = [{ r , c , w:grid[r][c] , path:[r+';'+c] }];
//             while (q.length){
//                 const {r,c,w,path} = q.shift();
//                 if (w === word) return true;
//                 for (const [dr,dc] of dirs){
//                     if (inBounds(grid,r+dr,c+dc) && !path.includes(`${r+dr};${c+dc}`) && w.length < word.length){
//                         q.push({ r:r+dr , c:c+dc , w:w+grid[dr+r][dc+c] , path:[...path, `${r+dr};${dc+c}`] });
//                     }
//                 }
//             }
//         }
//     }
//     return false;
// };

const dirs:number[][] = [ [1,0] , [0,1]  , [-1,0] , [0,-1] ];

function exist(grid: string[][], word: string): boolean {
    const rows = grid.length, cols = grid[0].length;
    const seen: boolean[][] = grid.map(row => row.map(() => false));
    const dfs = (r: number, c: number, i: number): boolean => {
        if (grid[r][c] !== word[i]) return false;
        if (i === word.length - 1) return true;
        seen[r][c] = true;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !seen[nr][nc]) {
                if (dfs(nr, nc, i + 1)) {
                    seen[r][c] = false;
                    return true;
                }
            }
        }
        seen[r][c] = false;
        return false;
    };
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (dfs(r, c, 0)) return true;
    return false;
}