/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if it's an array
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    // Check if it's an object
    // Object.keys(obj) returns an array of the object's own properties
    return Object.keys(obj).length === 0;
};