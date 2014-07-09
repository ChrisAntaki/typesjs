(function(self) { // Start types.js
    "use strict";

    var t = function(value, constructor, required) {
        // Skip check, if disabled.
        if (t.enabled === false) return true;

        // Determine if this value is optional.
        var optional = (required === false) || (required === "optional");

        // Check for presence of value
        if (typeof value === "undefined" || value === null) {
            if (!optional) {
                error("Value is null or undefined.");
            } else {
                return true;
            }
        }

        // Check for presence of constructor.
        if (typeof constructor === "undefined") {
            return error("Constructor was not found.");
        }

        // Create an array of types.
        var types = [].concat(constructor);

        // Verify types
        var verified = false;
        for (var i = 0, len = types.length; i < len; i++) {
            if (value.constructor === types[i]) {
                if (isNaN(value) && types[i] === Number) {
                    continue;
                }

                verified = true;
                break;
            }
        }
        if (!verified) {
            return error("Value was of an incorrect type.");
        }

        return true;
    };

    // Throw an error, and use `console.error` if possible.
    var error = function(message) {
        if (!t.silent && typeof console === "object" && typeof console.error === "function") {
            console.error(message);
        }

        if (t.errors) {
            throw new TypeError(message);
        } else {
            return false;
        }
    };

    // These settings can be changed at any time.
    t.enabled = true;
    t.silent = false;
    t.errors = true;

    // Export
    if (typeof module === "object" && typeof module.exports === "object") {
        // Node
        module.exports = t;
    } else {
        // Browser
        if (typeof self.t === "undefined") {
            self.t = t;
        }
        if (typeof self.typesjs === "undefined") {
            self.typesjs = t;
        }
    }

})(this); // End types.js