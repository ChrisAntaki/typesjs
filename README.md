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

`types.js` provides an easy, readable way to check types.

## Simple usage

```js
t("", String);
t([], String); // TypeError: Value was of an incorrect type.
```

Just pass a `value` and a `constructor`.

If there's a mismatch, a `TypeError` will be thrown.

You can also pass an `Array` of constructors. This is one of several advanced features.

## Advanced usage

Using Node, require `typesjs`.

```js
var t = require("typesjs");
```

Multiple types. Pass an `Array` of constructors.

```js
t("I am not a number.", [Number, String]);
```

Optional checks. You may pass *"optional"* or *false* as the third parameter.
This will allow *null* or *undefined* values.

```js
t(null, String, "optional");
t(void 0, String, "optional");
t(undefined, String, "optional");
```

Custom types. If you've got a reference to a type's `constructor`, you can test it!

```js
var CustomType = function() {
  // ...
};

var instance = new CustomType();

t(instance, CustomType);
```

Disable `types.js`, at any time.

```js
t.enabled = false;
```