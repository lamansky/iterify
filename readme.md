# iterify

Makes a value iterable if it isn’t already.

## Installation

Requires [Node.js](https://nodejs.org/) 4.0.0 or above.

```bash
npm i iterify
```

## API

The module exports a single function.

### Parameter

Bindable: `x` (any): The value to make iterable.

### Return Values

* If `x` is iterable, returns `x` as-is.
* If `x` is `undefined` or `null`, returns an empty array.
* Otherwise, returns a one-element array containing `x`.

## Example

```javascript
const iterify = require('iterify')

iterify([123]) // [123]
iterify(123) // [123]
iterify(null) // []
```
