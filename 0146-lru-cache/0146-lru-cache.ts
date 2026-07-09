class LRUCache {
    capacity:  number;
    order: number[][];
    // this.inCache: Set<number>
    constructor(capacity: number) {
        this.capacity = capacity;
        this.order = [];
        // this.inCache = new Set<number>();
    }

    get(key: number): number {
        let recent: number[] | null = null;
        for (let i = 0 ; i < this.order.length ; i++){
            if (this.order[i][0] === key){
                recent = this.order.splice(i,1).pop();
                this.order.unshift(recent);
                break;
            }
        }
        if (!recent) return -1;
        return recent[1];
    }

    put(key: number, value: number): void {
        if (this.get(key) > -1){
            this.order[0][1] = value;
            return;
        }
        this.order.unshift([key,value]);
        if (this.order.length > this.capacity) this.order.pop();
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */