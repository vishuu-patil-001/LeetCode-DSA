/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFn = function(...args) {
        // Create a unique key based on arguments. 
        // Using JSON.stringify handles multiple arguments like [2, 2] vs [1, 2].
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    }

    // Attach a helper method to retrieve the call count as per requirements
    memoizedFn.getCallCount = function() {
        return callCount;
    };

    return memoizedFn;
}