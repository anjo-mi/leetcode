const dirs = [
    [0,1],
    [1,0],
    [0,-1],
    [-1,0],
]

function spiralOrder(matrix: number[][]): number[] {
    let bounds: number[] = [1,matrix[0].length-1,0,matrix.length-1];
    const res:number[] = [];
    const limit = matrix[0].length * matrix.length;
    let dir = 0;
    const place = [0,-1];
    while (res.length < limit){
        place[0] += dirs[dir%4][0];
        place[1] += dirs[dir%4][1];
        if (dir % 4 === 0){
            if (place[1] >= bounds[1]){
                bounds[1]--;
                dir++;
            }
        }else if (dir % 4 === 1){
            if (place[0] >= bounds[3]){
                bounds[3]--;
                dir++;
            }
        }else if (dir % 4 === 2){
            if (place[1] <= bounds[2]){
                bounds[2]++;
                dir++;
            }
        }else if (dir % 4 === 3){
            if (place[0] <= bounds[0]){
                bounds[0]++;
                dir++;
            }
        }
        res.push(matrix[place[0]][place[1]]);
    }
    return res;
};