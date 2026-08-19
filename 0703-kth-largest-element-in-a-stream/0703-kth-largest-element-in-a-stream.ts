class KthLargest {
    order:number[] = [];
    k:number;
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.order = nums.sort((a,b) => b - a);
    }

    add(val: number): number {
        let i = 0;
        while (i < this.order.length && this.order[i] > val) i++;
        this.order.splice(i,0,val);
        return this.order[this.k-1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */