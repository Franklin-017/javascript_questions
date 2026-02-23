// Rate Limiter or Scheduler or Concurrency controller

class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.activeController = 0;
        this.queue = [];
    }

    add(task) {
        return new Promise((resolve, reject) => {

            const executeTask = () => {
                this.activeController++;

                task()
                    .then(resolve)
                    .catch(reject)
                    .finally(() => {
                        this.activeController--;
                        this.runNext();
                    })
            }

            if (this.activeController < this.limit) {
                executeTask();
            } else {
                this.queue.push(executeTask);
            }
        })
    }

    runNext() {
        if (this.queue.length > 0 && this.activeController < this.limit) {
            const nextTask = this.queue.shift();
            nextTask();
        } 
    }
}