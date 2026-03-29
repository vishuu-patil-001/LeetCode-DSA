/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    // 1. Create a unique symbol to avoid overwriting existing properties on the context
    const fnSymbol = Symbol();

    // 2. Assign the function (this) to the context using the unique symbol
    context[fnSymbol] = this;

    // 3. Execute the function using the context and spread the arguments
    const result = context[fnSymbol](...args);

    // 4. Delete the temporary property to keep the object clean
    delete context[fnSymbol];

    // 5. Return the result of the function execution
    return result;
}