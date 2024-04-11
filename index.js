let cantidad = prompt("ingrese la cantidad de personas que quiere analizar")
personas = []
suma = 0
function cargarPersonas(cantidad, personas) {
    for (i = 0; i < cantidad; i++) {
        let nombre = prompt("Ingrese el nombre de la persona")
        let genero = prompt("ingrese el genero de la persona (H/M)")
        let empleo = prompt("ingrese si la persona es empleada o desempleada (E/D)")
        let edad = parseInt(prompt("ingrese la edad de la persona"))

        personas.push(new Persona(nombre, genero, empleo, edad))

    }

}

cargarPersonas(cantidad, personas)

function promedioEdades(personas, suma) {
    for (i = 0; i < personas.length; i++) {
        suma += personas[i].edad
        console.log(suma)
    }

    return suma / personas.length
}

function menuOpciones(promedioEdades) {
    let opcion = prompt(" OPCIONES = 1) Calcular el promnedio de las edades de las personas cargadas 2)...   Indique la opcion deseada:")
    if(opcion == 1){
        alert(promedioEdades(personas, suma))
        
    }
}

menuOpciones(promedioEdades)

//COSAS QUE AGREGAR= VERIFICACION IF PARA LA CANTIDAD EN LA LLAMADA A MENUoPCIONES Y A CARGAR PERSONAS
//AGREGAR MAS OPCIONES