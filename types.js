(function(self) { // Start types.js
    "use strict";

    var t = function(value, constructor, options) {
        // Evaluate options
        if (options !== undefined && options !== {}) {
            options.enabled = options.enabled || true;
            options.errors = options.errors || false;
            options.silent = options.silent || false;
            options.required = options.required || false;
        }

        // Throw an error, and use `console.error` if possible.
        var error = function(message) {
            if (!options.silent && typeof console === "object" && typeof console.error === "function") {
                console.error(message);
            }

            if (options.errors) {
                throw new TypeError(message);
            } else {
                return false;
            }
        };

        // Check for presence of value
        if (typeof value === "undefined" || value === null) {
            if (!options.required) {
                return error("Value is null or undefined.");
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
            var message = "Value was of an incorrect type.";
            if (constructor && constructor.name) {
                message += " Expecting '" + constructor.name + "'.";
            }
            return error(message);
        }

        return true;
    };

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