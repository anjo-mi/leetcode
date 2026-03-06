/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let heatNeeded = -Infinity;
    for (const house of houses){
        let minHeatForHouse = Infinity;
        for (const heater of heaters){
            const heatNeededHere = Math.abs(house - heater);
            minHeatForHouse = Math.min(heatNeededHere, minHeatForHouse);
        }
        heatNeeded = Math.max(minHeatForHouse,heatNeeded);
    }
    return heatNeeded;
};

/**
 * let maxHeatNeeded = -Infinity
 * iterate thru houses
 *     each house,
         minHeatNeededForThisHouse = Infinity
 *       iterate thru heaters, 
 *       we find dist = Math.abs(house - heat)
 *          min = Math.min(dist,max)
 *     max = Math.max(min,max)
 */