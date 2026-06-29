const myPow = (x: number, n: number): number => {
    if (x === 1) return x;
    if (x=== -1) return n % 2 ? x : -x;
    let abs = Math.floor(Math.abs(n) / 2);
    let res = 1;
    while (abs > 0){
        res *= x;
        abs--;
    }
    res *= res;
    if (n % 2 !== 0) res *= x;
    return n < 0 ? (1 / res) : res;
}