// Usa un bucle para crear 3 arrays de películas filtrados por categorías. Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos. Imprime cada array por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]

const small = []
const medium = []
const large = []

for (const m of movies) {
  if (m.durationInMinutes < 100) small.push(m)
  else if (m.durationInMinutes > 100 && m.durationInMinutes < 200)
    medium.push(m)
  else if (m.durationInMinutes > 200) large.push(m)
}

console.log('Pequeñas:', small)
console.log('Medianas:', medium)
console.log('Grandes:', large)
