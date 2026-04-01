/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Base case: if not an object or array, or is null, return it
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        const compactedArray = [];
        for (const item of obj) {
            const val = compactObject(item);
            if (Boolean(val)) {
                compactedArray.push(val);
            }
        }
        return compactedArray;
    }

    // Handle Objects
    const compactedObj = {};
    for (const key in obj) {
        const val = compactObject(obj[key]);
        if (Boolean(val)) {
            compactedObj[key] = val;
        }
    }
    return compactedObj;
};