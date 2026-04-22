// Simula una llamada a una API externa (base de datos, OpenAI, etc.)
const obtenerUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre: "Andrés", plan: "pro" })
    }, 1000) // simula 1 segundo de espera
  })
}

// Sin async/await — difícil de leer
obtenerUsuario().then(usuario => {
  console.log("Con .then:", usuario)
})

// Con async/await — así se escribe en código profesional
const main = async () => {
  const usuario = await obtenerUsuario()
  console.log("Con await:", usuario)
}

main()

// Manejo de errores — siempre necesario en producción
const obtenerConError = async () => {
  try {
    const usuario = await obtenerUsuario()
    console.log("Éxito:", usuario)
  } catch (error) {
    console.log("Error:", error)
  }
}

obtenerConError()