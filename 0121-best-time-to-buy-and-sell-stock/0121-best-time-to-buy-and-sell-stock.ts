function maxProfit(prices: number[]): number {
    let max = 0;
    let min = prices[0];
    for (let i = 1 ; i < prices.length ; i++){
        const sell = prices[i];
        if (sell - min > max) max = sell - min;
        if (sell < min) min = sell;
    }
    return max;
};