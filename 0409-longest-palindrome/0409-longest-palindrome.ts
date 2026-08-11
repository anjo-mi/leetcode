function longestPalindrome(s: string): number {
    const alpha = new Set<string>('abcdefghijklmnopqrstuvwxyz');
    const counts:Record<string,number> = s.split('').reduce((a,char) => {
        if (alpha.has(char.toLowerCase())) a[char] = (a[char] || 0) + 1;
        return a;
    }, {});
    let length:number = 0;
    let oddFound:boolean = false;
    for (const char in counts){
        if (counts[char] % 2) {
            length += (counts[char] - 1);
            oddFound = true;
        }
        else length += counts[char];
    }
    return oddFound ? length + 1 : length;
};