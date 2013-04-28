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

## How to Use

```js
var echo = types(function(message) { // Wrap a function with types().
    return message;
})
    .params(String) // Bind first parameter to String.
    .returns(String); // Bind return to String.

echo("Hellooo"); // Passes.
echo(7); // Fails.
```

As you can see, usage is fairly simple.

## More Options

```js
// Use a shorter syntax.
var echo = types(function(message) {
	return message;
})
	.p(String)
	.r(String);

// Disable checks.
types.enabled = false;
```

In the near future, visit: http://typesjs.org