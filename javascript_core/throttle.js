function throttle(fn, delay=500) {
    let isWaiting = false;
    let lastArgs = null;
    let lastContext = null;

    return function(...args) {
        if (isWaiting) {
            lastArgs = args;
            lastContext = this;
            return;
        }

        fn.apply(this, args);
        isWaiting = true;

        const checkTrailing = () => {
            if (lastArgs) {
                fn.apply(lastContext, lastArgs);

                lastArgs = null;
                lastContext = null;

                setTimeout(checkTrailing, delay);
            } else {
                isWaiting = false;
            }
        }
        setTimeout(checkTrailing, delay);
    }
}