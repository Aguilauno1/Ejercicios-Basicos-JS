// Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
function averageWord(list) {
  let total = 0
  for (const item of list) {
    if (typeof item === 'number') total += item
    else total += String(item).length
  }
  return total
}

const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
console.log(averageWord(mixedElements))
