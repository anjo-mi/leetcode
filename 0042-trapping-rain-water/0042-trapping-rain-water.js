/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let total = 0;
    for (let i = 0 ; i < height.length - 1 ; i++){
        let x = height[i];
        while (x > height[i+1]){
            let next = i + 1;
            while (x > height[next] && next < height.length) next++;
            if (next === height.length){
                x--;
                continue;
            }
            let ind = i + 1;
            let currTotal = 0;
            while (ind < next){
                total += (x - height[ind]);
                ind++;
            }
            i = next - 1;
            break;
        }
    }
    return total;
};
