class MyQueue {
    inStack: number[];
    outStack: number[];
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        this.peek();
        return this.outStack.pop()!;
    }

    peek(): number {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) this.outStack.push(this.inStack.pop()!);
        }
        return this.outStack[this.outStack.length - 1];
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
    // stack: Map<number,number>;
    // inds: number[];
    // pointer: number;
    // constructor() {
    //     this.stack = new Map<number,number>();
    //     this.inds = [];
    //     this.pointer = 0;
    // }

    // push(x: number): void {
    //     this.stack.set(this.inds.length,x)
    //     this.inds.push(x);
    // }

    // pop(): number {
    //     const front = this.stack.get(this.pointer);
    //     this.stack.delete(this.pointer);
    //     this.pointer++;
    //     return front;
    // }

    // peek(): number {
    //     return this.stack.get(this.pointer);
    // }

    // empty(): boolean {
    //     return this.stack.size === 0;
    // }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */