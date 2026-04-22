// Objeto básico
const usuario = {
  nombre: "Andrés",
  edad: 30,
  ciudad: "Medellín",
  activo: true
}

// Acceder a propiedades
console.log(usuario.nombre)        // Andrés
console.log(usuario["ciudad"])     // Medellín — otra forma válida

// Modificar una propiedad
usuario.edad = 31
console.log(usuario.edad)          // 31

// Agregar una propiedad nueva
usuario.email = "andres@email.com"
console.log(usuario.email)

// Destructuring — la forma que más verás en código real
const { nombre, edad, ciudad } = usuario
console.log(nombre, edad, ciudad)  // Andrés 31 Medellín

// Spread operator — copiar y extender un objeto
const usuarioActualizado = { ...usuario, ciudad: "Cartagena" }
console.log(usuarioActualizado)