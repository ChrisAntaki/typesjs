```
 _                           _
| |                         (_)
| |_ _   _ _ __   ___  ___   _ ___ 
| __| | | | '_ \ / _ \/ __| | / __|
| |_| |_| | |_) |  __/\__ \_| \__ \
 \__|\__, | .__/ \___||___(_) |___/
      __/ | |              _/ |
     |___/|_|             |__/

```

Easy type checking, in Node & browsers.

## Shall we begin...

```js
// Let's verify some variables are of the correct type.
t("String", String);
t(23, Number);
t([], Array);

// Great! They all passed.

// What if there's a mismatch?
t([], String); // TypeError is thrown.

// Our code is safely halted.

// To catch the exception, use a try/catch statement.
try {
    t([], String);
} catch(e) {
    alert('Hey, that was not a String, man.');
}

// Custom types are supported.
var CustomType = function() {};
var instance = new CustomType();
t(instance, CustomType);

// For optional values, just pass "optional" or false as the third parameter.
t(void 0, String, false);
t(void 0, String, "optional"); // More readable, to my eyes.

// You can always allow multiple types.
t("23", [Number, String]);

// You may silence `types.js`, to prevent console messages.
t.silent = true;

// Lastly, you may disable it at any time.
t.enabled = false;

```

This package is available through npm, as "typesjs".
