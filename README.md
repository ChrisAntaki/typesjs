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

### Installation

```sh
npm install typesjs # Node
bower install typesjs # Browser
```

### What can TypesJS do for me?

```js
var t = require('typesjs');

t("String", String);
t(23, Number);
t([], Array);

t([], String); // Throws a TypeError.
```

If you need a variable to be a `String`, for example, `typesjs` can halt your code safely when it's not.

### What if I dislike errors?

```js
t.errors = false;

t('Lorem', String); // Returns true.
t(1999, String); // Returns false.
```

If you disable errors, `typesjs` will return a `boolean` based on the match.
```


### What if I do like errors?

```js
try {
    t([], String);
} catch(e) {
    // ...
}
```

`try/catch` blocks are your friend here.
```

### What if I make my own types?

```js
function Message(text) {
	this.text = text;
}
var message = new Message('Lorem');
t(message, Message);
```

Custom types are fully supported.

### What if a value is null or undefined?

```js
t(undefined, String); // Throws a TypeError.
```

### What if a value isn't required though?

```js
t(undefined, String, false); // Returns true.
```

The third parameter is `required`. If you pass it `false`, or `"optional"`, that will allow for `null` and `undefined` values.

```js
t(undefined, String, "optional"); // Returns true.
```

### What if I want to allow multiple types?

```js
t("23", [Number, String]);
```

### What if I want to disable typesjs, during runtime?

```js
t.enabled = false;
```

### Great, one last thing. Can I disable the console logs, when there's a type mismatch?

```js
t.silent = true;
```
