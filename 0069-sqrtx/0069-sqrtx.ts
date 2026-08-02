function mySqrt(x: number): number {
    let n:number = 0;
    while (n * n <= x) n++;
    return n-1;
};