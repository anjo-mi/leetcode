function addBinary(a: string, b: string): string {
    if (!a.length || ! b.length) return '0';
    const total:bigint = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return total.toString(2);
};