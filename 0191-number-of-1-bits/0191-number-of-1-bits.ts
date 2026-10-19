function hammingWeight(n: number): number {
    const bin = n.toString(2);
    return bin.split('').reduce((a,el) => a += el === '1' ? 1 : 0 , 0);
};