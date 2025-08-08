// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
function average(numberList) {
  if (!numberList.length) return 0
  let sum = 0
  for (const n of numberList) sum += n
  return sum / numberList.length
}

const numbers10 = [12, 21, 38, 5, 45, 37, 6]
console.log(average(numbers10))
