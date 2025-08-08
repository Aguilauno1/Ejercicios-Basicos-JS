function findLongestWord(stringList) {
  let longest = ''
  for (const w of stringList) {
    if (w.length > longest.length) longest = w
  }
  return longest
}
// Prueba
const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(findLongestWord(avengers))
