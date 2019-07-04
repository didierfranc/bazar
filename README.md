# bazar.js

### compression/encoding

```js
const { encode, decode, compress, decompress } = require('bazar.js')

function cipher(string) {
  return encode(compress(string))
}

function decipher(string) {
  return decompress(decode(string))
}

cipher('company:12345') // 76BCabc
decipher('76BCabc') // company:12345
```
