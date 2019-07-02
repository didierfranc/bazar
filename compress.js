const defaultDictionary = [
  ['company', 'A'],
  ['bankAccount', 'B'],
  ['payment', 'C'],
]

function compress(input, dic = defaultDictionary) {
  let compressed = input

  for (let couple of dic) {
    compressed = compressed.replace(couple[0], couple[1])
  }

  return compressed
}

function decompress(input, dic = defaultDictionary) {
  let compressed = input

  for (let couple of dic) {
    compressed = compressed.replace(couple[1], couple[0])
  }

  return compressed
}

module.exports = {
  compress,
  decompress,
}
