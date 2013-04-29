(function() { // Start types.js
    var t = function(value, constructor, required) {
        // Skip check, if disabled.
        if (t.enabled === false) return false;

        // Determine if this value is optional.
        var optional = (required === false) || (required === "optional");

        // Check for presence of value
        if (typeof value === "undefined" || value === null) {
            if (!optional) {
                error("Value is null or undefined.");
            } else {
                return;
            }
        }

        // Check for presence of constructor.
        if (typeof constructor === "undefined") {
            error("Constructor was not found.");
        }

        // Create an array of types.
        var types = [].concat(constructor);

        // Verify types
        var verified = false;
        for (var i = 0, len = types.length; i < len; i++) {
            if (value.constructor === types[i]) {
                verified = true;
                break;
            }
        }
        if (!verified) {
            error("Value was of an incorrect type.");
        }
    };

    // Throw an error, and use `console.error` if possible.
    var error = function(message) {
        if (typeof console === "object" && typeof console.error === "function") {
            console.error(message);
        }

        throw new TypeError(message);
    };

    // This can be changed at any time.
    t.enabled = true;

    // Export
    if (typeof module === "object" && typeof module.exports === "object") {
        // Node
        module.exports = t;
    } else {
        // Browser
        if (typeof this.t === "undefined") {
            this.t = t;
        }
        if (typeof this.typesjs === "undefined") {
            this.typesjs = t;
        }
    }

})(this); // End types.js