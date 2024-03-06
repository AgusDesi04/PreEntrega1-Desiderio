let res = "S"
let cantidad = 0
let suma = 0
do {
  let edad = Number(prompt("Ingrese la edad de la persona:"));
  if (edad > 0) {
    suma = suma + edad;
    cantidad++
    res = prompt("Quieres seguir ingresando edades?:(S/N)")
  } else {
    alert("La edad teiene que ser mayor a 0")
  }


} while (res == "S")

function calcularPromedio(sumatoria, cantidad) {
  let promedio = sumatoria / cantidad
  return promedio
}


promedio = calcularPromedio(suma, cantidad)

alert(promedio)