```
888                                        d8b         
888                                        Y8P         
888                                                    
888888888  88888888b.  .d88b. .d8888b     8888.d8888b  
888   888  888888 "88bd8P  Y8b88K         "88888K      
888   888  888888  88888888888"Y8888b.     888"Y8888b. 
Y88b. Y88b 888888 d88PY8b.         X88d8b  888     X88 
 "Y888 "Y8888888888P"  "Y8888  88888P'Y8P  888 88888P' 
           888888                          888         
      Y8b d88P888                         d88P         
       "Y88P" 888                       888P"          
```

Easy type checking, in Node & browsers.

## Let's check it out!

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

This package is available through npm, as `typesjs`
