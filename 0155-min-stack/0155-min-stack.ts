class MinStack {
    stack: number[];
    min: number[];
    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(value: number): void {
        const min = this.getMin();
        const newMin = Math.min(min,value);
        this.min.push(newMin);
        this.stack.push(value);
    }

    pop(): void {
        this.stack.pop();
        this.min.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min.length ? this.min[this.min.length - 1] : Infinity;
    }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */