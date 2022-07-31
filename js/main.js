const tareas = [];

obtenerIdentificador()

let botonBuscar = document.querySelector("#botonBuscar");
botonBuscar.addEventListener("click", () => mostrarResultadoBuscar());

const botonAnadir = document.querySelector("#botonAnadir"); 
botonAnadir.addEventListener("click", () => {
const tar = document.querySelector("#inputTar").value;

  if (tar !== "") {
    tareas.push(tar);
    guardarTareas()
    mostrarTareas();
  } 
});

recuperarTareas()


