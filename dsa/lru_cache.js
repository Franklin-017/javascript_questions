class Node{
    constructor(key, value) {
        this.key =  key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRU{
    constructor(limit) {
        if (limit <= 0) throw new Error("Limit must be greater than 0");
        this.limit = limit;
        this.cache = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    _addToHead(node) {
        const firstNode = this.head.next;
        firstNode.prev = node;
        node.next = firstNode;
        node.prev = this.head;
        this.head.next = node;
    }

    _moveToHead(node) {
        this._remove(node);
        this._addToHead(node);
    } 

    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        this._moveToHead(node);
        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const existingNode = this.cache.get(key);
            existingNode.value = value;
            this._moveToHead(existingNode);
        } else {
            if ( this.cache.size >= this.limit) {
                const lruCache = this.tail.prev;
                this._remove(lruCache);
                this.cache.delete(lruCache.key);
            } 

            const newNode = new Node(key, value);
            this._addToHead(newNode);
            this.cache.set(key, newNode);
        }

    }
} 