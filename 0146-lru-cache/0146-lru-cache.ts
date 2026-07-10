class LRUCache {
    capacity:  number;
    order: Map<number,number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.order = new Map();
    }

    get(key: number): number {
        const val = this.order.get(key);
        if (val === undefined) return -1;
        this.order.delete(key);
        this.order.set(key,val);
        return val;
    }

    put(key: number, value: number): void {
        if (this.order.size >= this.capacity && !this.order.has(key)){
            const first = this.order.keys().next().value;
            this.order.delete(first);
        }
        this.order.delete(key);
        this.order.set(key,value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */