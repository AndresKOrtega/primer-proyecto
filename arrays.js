const numeros = [1, 2, 3, 4, 5]
const nombres = ["Ana", "Beto", "Carlos"]

// Acceder por índice (empieza en 0)
console.log(numeros[0])   // 1
console.log(nombres[2])   // Carlos

// Los 3 métodos que más usarás en React y Node

// map — transforma cada elemento, retorna nuevo array
const dobles = numeros.map(n => n * 2)
console.log(dobles)       // [2, 4, 6, 8, 10]

// filter — filtra elementos, retorna nuevo array
const mayoresDeTres = numeros.filter(n => n > 3)
console.log(mayoresDeTres) // [4, 5]

// reduce — acumula un resultado
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0)
console.log(suma)          // 15

// Destructuring en arrays
const [primero, segundo, ...resto] = numeros
console.log(primero)  // 1
console.log(segundo)  // 2
console.log(resto)    // [3, 4, 5]