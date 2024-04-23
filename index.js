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
let formulario = document.getElementById("formulario")

cargarBtn.onclick = () => {
    let nombre = nombreInput.value;
    let genero = generoInput.value;
    let edad = parseInt(edadInput.value) || 0;
    let cargo = cargoInput.value;
    let salario = parseInt(salarioInput.value) || 0;
    if (nombre != "" && genero != "" && cargo != "") {
        if (edad > 0 && salario > 0) {
            empleados.push(new Persona(nombre, genero, edad, cargo, salario));
            localStorage.setItem("empleadosCargados", JSON.stringify(empleados));
            formulario.reset();
            Toastify({
                text: "Empleado Cargado!",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        } else {
            Toastify({
                text: "La edad y el salario deben ser mayores a 0",
                className: "info",
                style: {
                    background: "red",
                }
            }).showToast();
        }
    } else {
        Toastify({
            text: "Los campos de nombre, genero y cargo no pueden estar vacios!",
            className: "info",
            style: {
                background: "red",
            }
        }).showToast();
    }


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

    // PROBAR CAMBIAR POR ALERTA DE SWEET ALERT

}

infoBtn.onclick = () => {
    console.log(empleados)
    let buscador = buscadorInput.value;
    let empleado = empleados.find((el) => {
        return el.nombre.toLowerCase() == buscador.toLowerCase()
    });
    console.log(empleado)

    if (empleado != undefined) {
        mostrarInformacionEmpleado(empleado)

    } else {
        Toastify({
            text: "No se encontro el empleado!",
            className: "info",
            style: {
                background: "red",
            }
        }).showToast();
    }

};

