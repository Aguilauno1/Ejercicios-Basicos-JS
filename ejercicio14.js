// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
function repeatCounter(list) {
  const counts = {}
  for (const word of list) {
    counts[word] = (counts[word] || 0) + 1
  }
  return counts
}

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
console.log(repeatCounter(words))
