// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
const placesToTravel18 = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
// recorrer con for y eliminar ids 11 y 40
for (let i = placesToTravel18.length - 1; i >= 0; i--) {
  if (placesToTravel18[i].id === 11 || placesToTravel18[i].id === 40) {
    placesToTravel18.splice(i, 1)
  }
}
console.log(placesToTravel18)
