# Bighook

Easily hook on to the beginning or end of function calls
___

## Installation

```bash
npm i bighook
```

## Example

```javascript
const Bighook = require('bighook');

let val1;
let val2;
const setVal1 = () => {
  val1 = 'Hello world!';
};

const hook = new Bighook(setVal1);

hook
  .before(() => {
    val2 = 'foo';
  })
  .after(() => {
    val1 = 'bar';
  });

hook.function()();
console.log(val1, val2); // "bar foo"
```

## Docs

The docs can be found [here](./docs.md)
