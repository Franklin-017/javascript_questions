class EventEmitter {
    constructor() {
        this.event= {};
    }

    on(eventName, callback) {
        if(!this.event[eventName]) {
            this.event[eventName] = [];
        }

        this.event[eventName].push(callback);
    }

    emit(eventname, ...args) {
        const listner = this.event[eventname];

        if (listner) {
            listner.forEach(callback => {
                callback(...args);
            })
        }
    }

    off(eventName, callbackToRemove) {
        const listner = this.event[eventName];

        if(listner) {
            this.event[eventName] = listner.filter(callback => callback !== callbackToRemove);
        }   
    }
}