export function showMixedString (n) {
  const str = '1234567890abcdefghijklmnopqrstABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let arr = []

  while (arr.length < n) {
    arr.push(str.substr(Math.floor(Math.random() * str.length), 1))
  }

  return arr.join('')
}
