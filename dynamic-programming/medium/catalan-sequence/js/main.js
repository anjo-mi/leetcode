function generateParentheses(n){
    const dp = new Array(n+1).fill(0).map(() => []);

    dp[0] = [''];

    for (let pairs = 1 ; pairs <= n ; pairs++){
        for (let i = 0 ; i < pairs ; i++){
            const leftParenth = dp[i];
            const rightParenth = dp[pairs - 1 - i];

            for (const left of leftParenth){
                for (const right of rightParenth){
                    dp[pairs].push('(' + left + ')' + right);
                }
            }
        }
    }
    return dp[n];
}

console.log(generateParentheses(2));

console.log(generateParentheses(3));