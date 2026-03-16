function romanToInt(s: string): number {
    let count = 0;
    for (let i = 0 ; i < s.length ; i++){
        if (s[i] === 'C'){
            if (i === s.length - 1 || (s[i+1] !== 'M' && s[i+1] !== 'D')) count += 100;
            else{
                if (s[i+1] === 'M') count += 900;
                if (s[i+1] === 'D') count += 400;
                i++;
                continue;
            }
        }
        if (s[i] === 'X'){
            if (i === s.length - 1 || (s[i+1] !== 'L' && s[i+1] !== 'C')) count += 10;
            else{
                if (s[i+1] === 'C') count += 90;
                if (s[i+1] === 'L') count += 40;
                i++;
                continue;
            }
        }
        if (s[i] === 'I'){
            if (i === s.length - 1 || (s[i+1] !== 'X' && s[i+1] !== 'V')) count += 1;
            else{
                if (s[i+1] === 'X') count += 9;
                if (s[i+1] === 'V') count += 4;
                i++;
                continue;
            }
        }
        if (s[i] === 'V') count += 5;
        if (s[i] === 'L') count += 50;
        if (s[i] === 'D') count += 500;
        if (s[i] === 'M') count += 1000;
    }
    return count;
};