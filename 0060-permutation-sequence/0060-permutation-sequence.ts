function getPermutation(n: number, k: number): string {
    const digits = Array.from({length: n}, (_, i) => i + 1);
    const fact = [1];
    for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;
    k -= 1;
    let res = '';
    for (let i = n; i >= 1; i--) {
        const idx = Math.floor(k / fact[i - 1]);
        res += digits[idx];
        digits.splice(idx, 1);
        k %= fact[i - 1];
    }
    return res;
}

// const makePerms = (s:string[]):string[][] => {
//     if (!s.length) return [[]];
//     const perms = makePerms(s.slice(1));
//     const first = s[0];
//     const res:string[][] = [];
//     for (const perm of perms){
//         for (let i = 0 ; i <= perm.length ; i++){
//             res.push([...perm.slice(0,i), first, ...perm.slice(i)]);
//         }
//     }
//     return res;
// }

// function getPermutation(n: number, k: number): string {
//     let s = '';
//     for (let i = 1 ; i <= n ; i++) s+=i;
//     const perms = makePerms(s.split('')).map(perm => perm.join('')).sort();
//     return perms[k-1];
// };