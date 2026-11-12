function reverseBits(n: number): number {
    const bin:string = n.toString(2).padStart(32,'0');
    const newbin = bin.split('').reverse().join('');
    return parseInt(newbin,2);
};