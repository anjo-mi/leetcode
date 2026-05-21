var MinStack = function() {
    this.stack = [];
    this.min = [];
};

MinStack.prototype.push = function(val) {
    const currMin = this.getMin() || this.getMin() === 0 ? this.getMin() : Infinity;
    const min = Math.min(val,currMin);
    this.min.push(min);
    this.stack.push(val);
    console.log(this.min)
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1];
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length -1];
};
