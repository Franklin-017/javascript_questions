class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    
    push(value) {
        this.stack.push(value);
        
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    }
    
    pop() {
        let poppedValue = this.stack.pop();
        if (poppedValue === this.getMin()) {
            this.minStack.pop();
        }
        return poppedValue;
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
