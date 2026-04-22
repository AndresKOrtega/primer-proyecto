// 1. Variables
const nombre = "Andrés"
let edad = 30
var ciudad = "Medellín" // nunca uses var — es antigua

// 2. Tipos de datos
const texto = "hola"           // string
const numero = 42              // number
const decimal = 3.14           // number
const activo = true            // boolean
const vacio = null             // null (ausencia intencional)
const indefinido = undefined   // undefined (no asignado)

// 3. Template literals
const saludo = `Hola, soy ${nombre} y tengo ${edad} años`
console.log(saludo)

// 4. Funciones
function sumar(a, b) {
  return a + b
}

// Misma función, forma moderna (arrow function)
const sumar2 = (a, b) => a + b

console.log(sumar(3, 5))   // 8
console.log(sumar2(3, 5))  // 8

//-------------------------

// Función con valor por defecto
const saludar = (nombre = "visitante") => {
  return `Hola, ${nombre}`
}

console.log(saludar("Andrés"))  // Hola, Andrés
console.log(saludar())          // Hola, visitante

// Función que retorna un objeto
const crearUsuario = (nombre, edad) => {
  return { nombre, edad }  // shorthand — equivale a { nombre: nombre, edad: edad }
}

const usuario = crearUsuario("Andrés", 30)
console.log(usuario)

