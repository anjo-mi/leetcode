function isPalindrome(s: string): boolean {
    const valid = new Set<string>('abcdefghijklmnopqrstuvwxyz0123456789');
    s = s.split('').filter(char => valid.has(char.toLowerCase())).map(char => char.toLowerCase()).join('');
    return s === s.split('').reverse().join('');
};