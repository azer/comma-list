## comma-list

Parse comma separated list in a string

## Install

```bash
$ npm install comma-list
```

## Usage

```js
var commaList = require('comma-list')

commaList('foo, bar, qux, , span, eggs, ')
// => ['foo', 'bar', 'qux', 'span', 'eggs']
```
