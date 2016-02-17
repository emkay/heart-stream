# Heart Stream

## Install

`npm i heart-stream`

## Example

```javascript
const hs = require('heart-stream')
hs.on('data', (data) => {
  console.log(data.toString())
})
```

Look at `example.js` for http example.
