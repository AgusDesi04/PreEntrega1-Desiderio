let res = "S"
let cantidad = prompt('ingrese la cantidad de personas que desea analizar')
let personas = []

function cargarPersonas(cantidad, personas) {
  nombre = prompt('ingrese el nombre de la persona')
  genero = prompt('ingrese el genero de la persona(H/M)')
  empleo = prompt('ingrese si la persona es empleada o desempleada (E/D)')
  edad = prompt('ingrese la edad de la persona')

  let persona = new Persona(nombre, genero, empleo, edad)
  personas.push = persona
}

console.log(personas)


/*function calcularPromedio(sumatoria, cantidad) {
  let promedio = sumatoria / cantidad
  return promedio
}




promedio = calcularPromedio(suma, cantidad)

alert(promedio)


const arrayEdades = []
do {
  let edad = Number(prompt("Ingrese la edad de la persona:"));
  if (edad > 0) {
    arrayEdades.push(edad);
    cantidad++
    res = prompt("Quieres seguir ingresando edades?:(S/N)")
    console.log(arrayEdades)
  } else {
    alert("La edad teiene que ser mayor a 0")
  }


} while (res == "S")

let suma = 0

for (var i = 0; i < arrayEdades.length; i++) {
  suma += arrayEdades[i]
}
console.log(suma)*/