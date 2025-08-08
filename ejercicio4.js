const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']

// 4.1  "Tendo" por posición
console.log(aldeanos[3]) // índice 3

// 4.2  meter "Cervasio" al final
aldeanos.push('Cervasio')

// 4.3  cambiar primer elemento por "Bambina"
aldeanos[0] = 'Bambina'

// 4.4  dar la vuelta
aldeanos.reverse()

// 4.5  cambiar "Narciso" por "Canela" con método de array
const idxNarciso = aldeanos.indexOf('Narciso')
if (idxNarciso !== -1) {
  aldeanos.splice(idxNarciso, 1, 'Canela') // quita 1 e inserta "Canela"
}

// 4.6  último elemento sin “atacar” la posición explícita
console.log(aldeanos[aldeanos.length - 1])

console.log(aldeanos) // ver cómo quedó
