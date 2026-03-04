/**
 * @param {number[][]} grid
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(grid) {
    for (let r = 0 ; r < grid.length ; r++){
        for (let c = r + 1 ; c < grid[r].length ; c++){
            [grid[r][c] , grid[c][r]] = [grid[c][r] , grid[r][c]];
        }
    }
    for (const row of grid) row.reverse();
    return grid;
};
/**
 * if 
 */