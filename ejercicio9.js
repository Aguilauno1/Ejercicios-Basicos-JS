// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
function sumNumbers(numberList) {
  let sum = 0
  for (const n of numberList) sum += n
  return sum
}
// Prueba
const numbers9 = [1, 2, 3, 5, 45, 37, 58]
console.log(sumNumbers(numbers9))
