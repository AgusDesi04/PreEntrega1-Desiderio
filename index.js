let empleados = [];

let empleadosLS = localStorage.getItem("empleadosCargados")
if (empleadosLS) {
    empleados = JSON.parse(empleadosLS)
} else {
    empleados = []
}

let cargarBtn = document.getElementById("botonCarga");
let nombreInput = document.getElementById("nombre");
let generoInput = document.getElementById("genero");
let edadInput = document.getElementById("edad")
let cargoInput = document.getElementById("cargo");
let salarioInput = document.getElementById("salario");


cargarBtn.onclick = () => {
    let nombre = nombreInput.value;
    let genero = generoInput.value;
    let edad = parseInt(edadInput.value);
    let cargo = cargoInput.value;
    let salario = parseInt(salarioInput.value);

    empleados.push(new Persona(nombre, genero, edad, cargo, salario))

    localStorage.setItem("empleadosCargados", JSON.stringify(empleados))

    console.log(empleados)
}

