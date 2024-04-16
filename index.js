let empleados = [];

let empleadosLS = localStorage.getItem("empleadosCargados");
if (empleadosLS) {
    empleados = JSON.parse(empleadosLS);
} else {
    empleados = [];
};

let cargarBtn = document.getElementById("botonCarga");
let nombreInput = document.getElementById("nombre");
let generoInput = document.getElementById("genero");
let edadInput = document.getElementById("edad")
let cargoInput = document.getElementById("cargo");
let salarioInput = document.getElementById("salario");
let buscadorInput = document.getElementById("buscador");
let infoBtn = document.getElementById("botonInfo");
let contenedorEmpleados = document.getElementById('contenedorEmpleados')

cargarBtn.onclick = () => {
    let nombre = nombreInput.value;
    let genero = generoInput.value;
    let edad = parseInt(edadInput.value);
    let cargo = cargoInput.value;
    let salario = parseInt(salarioInput.value);

    empleados.push(new Persona(nombre, genero, edad, cargo, salario));

    localStorage.setItem("empleadosCargados", JSON.stringify(empleados));

    console.log(empleados);
};

function mostrarInformacionEmpleado(empleado) {
    contenedorEmpleados.innerHTML = `
    <p>Nombre: ${empleado.nombre}</p>
    <p>Género: ${empleado.genero}</p>
    <p>Edad: ${empleado.edad}</p>
    <p>Cargo: ${empleado.cargo}</p>
    <p>Salario: ${empleado.salario}</p>
`;

}

infoBtn.onclick = () => {

    let buscador = buscadorInput.value;
    let empleado = empleados.find((el) => {
        return el.nombre.toLowerCase() == buscador.toLowerCase()
    });
    console.log(empleado)

    if (empleado != undefined) {
        contenedorEmpleados.innerHTML = ''
        mostrarInformacionEmpleado(empleado)
    } else {
        contenedorEmpleados.innerHTML = ''
        contenedorEmpleados.innerHTML = '<p> No se encontro el empleado'
    }

};

