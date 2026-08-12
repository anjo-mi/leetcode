function maxProfit(prices: number[]): number {
    let maxProf:number = 0;
    let minCost:number = prices[0];
    for (let i = 1 ; i < prices.length ; i++){
        const sellPrice:number = prices[i];
        if (sellPrice - minCost > maxProf) maxProf = sellPrice - minCost;
        if (sellPrice < minCost) minCost = sellPrice;
    }
    return maxProf;
};