const inBounds = (r:number,c:number,grid:number[][]) => {
    return r >= 0 &&
           c >= 0 &&
           (grid[r]?.length) &&
           (grid[r][c] || grid[r][c] === 0);
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const v = new Set<string>();
    if (!inBounds(sr,sc,image)) return image;
    const clr:number = image[sr][sc];
    const q:Record<string,number>[] = [{r:sr,c:sc,col:clr}];
    while (q.length){
        const {r,c,col} = q.shift();
        if (clr !== col) continue;
        const key:string = r + ';' + c;
        if (v.has(key)) continue;
        v.add(key);
        image[r][c] = color;
        if (inBounds(r+1,c,image)) q.push({r:r+1, c , col:image[r+1][c]});
        if (inBounds(r-1,c,image)) q.push({r:r-1, c , col:image[r-1][c]});
        if (inBounds(r,c+1,image)) q.push({r, c:c+1 , col:image[r][c+1]});
        if (inBounds(r,c-1,image)) q.push({r, c:c-1 , col:image[r][c-1]});
    }
    return image;
};