const { encode, decode } = require('./bazar')
const { compress, decompress } = require('./compress')

const string = 'company:12345'

test('encode/decode', () => {
  const encoded = encode(string)
  const decoded = decode(encoded)

  expect(decoded).toBe(string)
})

test('compress/decompress', () => {
  const compressed = compress(string)
  const decompressed = decompress(compressed)

  expect(decompressed).toBe(string)
})

test('all in', () => {
  const compressed = compress(string)
  const encoded = encode(compressed)
  const decoded = decode(encoded)
  const decompressed = decompress(decoded)

  const compressionRatio = 100 - (100 * encoded.length) / string.length

  console.log(decompressed, '→', encoded, -Math.round(compressionRatio), '%')

  expect(decompressed).toBe(string)
})
