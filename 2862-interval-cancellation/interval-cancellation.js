/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // 1. Execute the function immediately at 0ms
    fn(...args);

    // 2. Set up the recurring interval
    const timer = setInterval(() => {
        fn(...args);
    }, t);

    // 3. Return the cancel function
    return function() {
        clearInterval(timer);
    };
};