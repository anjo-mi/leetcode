// function coinChange(coins: number[], amount: number): number {
//     if (amount === 0) return 0;
//     if (amount < 0) return -1;
//     if (!coins.length) return -1;
//     let min = Infinity;
//     const wa = coinChange(coins,amount - coins[0]);
//     const wo = coinChange(coins.slice(1),amount);
//     if (wa < 0 && wo < 0) return -1;
//     if (wa >= 0) min = Math.min(1 + wa, min);
//     if (wo >= 0) min = Math.min(wo, min);
//     return min;
// };

function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) for (const coin of coins) {
            if (coin <= i && dp[i - coin] + 1 < dp[i]) dp[i] = dp[i - coin] + 1;
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}