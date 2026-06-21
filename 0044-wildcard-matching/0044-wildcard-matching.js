/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p, i= 0, j=0, memo = {}) {
//     const k = i + ';' + j;
//     if (k in memo) return memo[k];
//     if (i < s.length && j >= p.length) return memo[k] = false;
//     if (j < p.length && i >= s.length && p[j] !== '*') return memo[k] = false;
//     if (s[i] !== p[j] && p[j] !== '?' && p[j] !== '*') return memo[k] = false;
//     if (j >= p.length && i >= s.length) return memo[k] = true;
//     const results = [];
//     if (s[i] === p[j] || p[j] === '?')  results.push(isMatch(s,p,i+1,j+1,memo));
//     if (p[j] === '*'){
//         for (let ind = i; ind <= s.length ; ind++){
//             results.push(isMatch(s,p,ind,j+1,memo));
//         }
//     }
//     return memo[k] = results.includes(true);
// };

var isMatch = function(s, p) {
    const m = s.length, n = p.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') dp[0][j] = dp[0][j - 1];
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    return dp[m][n];
};