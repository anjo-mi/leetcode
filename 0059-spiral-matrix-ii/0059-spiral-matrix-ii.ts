function generateMatrix(n: number): number[][] {
    const arr:number[][] = Array(n).fill(null).map(el => Array(n).fill(0));
    const dirs:number[][] = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0],
    ];
    let place:[number,number] = [0,0];
    let state:number = 0;
    for (let i = 1 ; i <= n**n ; i++){
        const [r,c] = place;
        arr[r][c] = i;
        let [dr,dc] = dirs[state];
        let attempt = 0;
        while (arr[r+dr]?.[c+dc] === undefined || arr[r+dr][c+dc]) {
            state++;
            state %= 4;
            attempt++;
            if (attempt > 4) return arr;
            dr = dirs[state][0];
            dc = dirs[state][1];
        }
        place = [r+dr,c+dc];
    }
    return arr;
};