let str = '0123456789abcdefghijkmnopqrstuvwxyz-:ABC'
let rnd = 'ABCabcdefghijkmnopqrstuvwxyz012345-:6789'

str = [...str]
rnd = [...rnd]

function encode(input) {
  let encoded = ''

  for (let char of [...input]) {
    const i = str.indexOf(char)

    if (i > -1) {
      encoded += rnd[i] || char
    } else {
      encoded += char
    }
  }

  return encoded
}

function decode(input) {
  let decoded = ''

  for (let char of [...input]) {
    const i = rnd.indexOf(char)

    if (i > -1) {
      decoded += str[i]
    } else {
      decoded += char
    }
  }

  return decoded
}

module.exports = {
  encode,
  decode,
}
