// function longestPalindrome(s: string, i:number = 0 , j:number = s.length, memo:Record<string,string> = {}): string {
//     const k:string = i + ';' + j;
//     if (k in memo) return memo[k];
//     const str = s.slice(i,j);
//     if (i > j) return '';
//     if (i === j) return s[i];
//     if (str === str.split('').reverse().join('')) return memo[k] = str;
//     const [a,b] = [
//         longestPalindrome(s,i+1,j,memo),
//         longestPalindrome(s,i,j-1,memo),
//     ]
//     return memo[k] = a.length > b.length ? a : b;
// };

function longestPalindrome(s: string): string {
    let start = 0, end = 0;
    const expand = (l: number, r: number) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        if (r - l - 1 > end - start) {
            start = l + 1;
            end = r;
        }
    };
    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    }
    return s.slice(start, end);
}