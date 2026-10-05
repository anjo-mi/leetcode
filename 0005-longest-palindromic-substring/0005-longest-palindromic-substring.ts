function longestPalindrome(s: string): string {
    let start = 0, end = 0;
    const expand = (l: number, r: number) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
        if (r - l - 1 > end - start) { start = l + 1; end = r; }
    };
    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    }
    return s.slice(start, end);
}