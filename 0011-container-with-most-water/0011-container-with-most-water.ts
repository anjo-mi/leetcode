function maxArea(height: number[]): number {
    let max = 0,
        i = 0,
        j = height.length - 1;
    while (i < j){
        const h = Math.min(height[i],height[j]);
        const l = j-i;
        const water = l * h;
        max = Math.max(water,max);
        if (height[i] > height[j]) j--;
        else i++;
    }
    return max;
};