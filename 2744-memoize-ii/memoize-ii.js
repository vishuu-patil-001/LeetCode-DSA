/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // The root of our cache tree
    const cache = new Map();
    // A unique symbol to represent the end of an argument list
    const RESULT_KEY = Symbol('result');

    return function(...args) {
        let currentLevel = cache;

        // Traverse the Map tree based on arguments
        for (const arg of args) {
            if (!currentLevel.has(arg)) {
                currentLevel.set(arg, new Map());
            }
            currentLevel = currentLevel.get(arg);
        }

        // Check if we have a result for this specific path
        if (currentLevel.has(RESULT_KEY)) {
            return currentLevel.get(RESULT_KEY);
        }

        // Otherwise, call the original function and cache the result
        const result = fn(...args);
        currentLevel.set(RESULT_KEY, result);
        
        return result;
    }
}