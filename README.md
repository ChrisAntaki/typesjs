Note from 2021: Just use [TypeScript](https://nodejs.dev/learn/nodejs-with-typescript) lol

```
888                                                  d8b
888                                                  Y8P
888
888888  888  888  88888b.    .d88b.   .d8888b       8888 .d8888b
888     888  888  888 "88b  d8P  Y8b  88K           "888 88K
888     888  888  888  888  88888888  "Y8888b.       888 "Y8888b.
Y88b.   Y88b 888  888 d88P  Y8b.           X88  d8b  888      X88
 "Y888   "Y88888  88888P"    "Y8888   "88888P'  Y8P  888 "88888P'
             888  888                                888
        Y8b d88P  888                               d88P
         "Y88P"   888                             888P"
```

### Installation

```sh
npm install typesjs   # Node
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

If you need a variable to be a `String`, for example, typesjs can halt your code safely when it's not.

### What if I dislike errors?

```js
t.check('Lorem', String); // Returns true.
t.check(1999, String);    // Returns false.
```

`check` will return a `boolean` based on the match.

### What if I do like errors?

```js
try {
    t([], String);
} catch(e) {
    // ...
}
```

`try/catch` blocks are your friend here.

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

Just pass `false` or `"optional"` as the third parameter. This will allow for `null` and `undefined` values.

```js
t(undefined, String, "optional"); // Returns true.
```

Passing `"optional"` is more verbose, but perhaps more readable.

### What if I want to allow multiple types?

```js
t("23", [Number, String]);
```

Just pass an array of types.

### What if I want to disable typesjs, during runtime?

```js
t.enabled = false;
```

When disabled, typesjs will always return `true`.

**Note:** This changes the global setting for all the code using TypesJS. Only
use this in applications and **never** in libraries.

- - -

Feel free to make a GitHub issue, or pull request. Thanks.
