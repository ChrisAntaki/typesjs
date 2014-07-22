(function(self) { // Start types.js
    "use strict";

    var t = function TypesJS (value, constructor, required) {
        // Skip check, if disabled.
        if (t.enabled === false) { return true; }

        // Check if value is valid.
        if (t.check(value, constructor, required)) { return true; }

        if (constructor && constructor.name) {
            throw new TypeError(value.toString() + ' is not a ' + constructor.name);
        } else {
            throw new TypeError(value.toString() + ' is of an incorrect type');
        }

    };

    t.check = function check (value, constructor, required) {
        // Skip check, if disabled
        if (t.enabled === false) { return true; }

        // Check for presence of value
        if (typeof value === "undefined" || value === null) {
            // Determine if this value is optional
            return (required === false) || (required === "optional");
        }

        // Check for presence of constructor
        if (typeof constructor === "undefined") {
            throw new Error("No constructor was specified");
        }

        // Create an array of types
        var types = [].concat(constructor);

        // Check if the value is of valid type
        for (var i = 0, len = types.length; i < len; i++) {
            if (value.constructor === types[i]) {
                if (isNaN(value) && types[i] === Number) {
                    continue;
                }

                return true;
            }
        }

        return false;
    };

    // These settings can be changed at any time
    t.enabled = true;

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
