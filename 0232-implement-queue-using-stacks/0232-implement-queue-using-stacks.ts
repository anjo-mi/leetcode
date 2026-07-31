class MyQueue {
    in: number[];
    out: number[];
    constructor() {
        this.in = [];
        this.out = [];
    }

    push(x: number): void {
        this.in.push(x);
    }

    pop(): number {
        this.peek();
        return this.out.pop()!;
    }

    peek(): number {
        if (this.out.length === 0) {
            while (this.in.length > 0) this.out.push(this.in.pop()!);
        }
        return this.out[this.out.length - 1];
    }

    empty(): boolean {
        return this.in.length === 0 && this.out.length === 0;
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