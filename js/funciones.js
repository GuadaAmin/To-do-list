const alertafire = () => {
  Swal.fire({
    icon: 'error',
    title: '¡Error!',
    text: 'Completa todo los datos',
  })
}

const catchfire = () => {
  Swal.fire({
    icon: 'error',
    title: '¡Error!',
    text: 'No se pudo reconocer tu identidad',
  })
}

const mostrar = document.querySelector("#boxTareas");

const mostrarTareas = () => {
  tareas.forEach((tar) => {
    const tareaNueva = tar || alertafire()
    if (tareaNueva !== undefined) {
      const tareaDiv = document.createElement("div");
      const tareaT = document.createElement("p");
      tareaT.className = "animate__animated animate__fadeInUp";
      tareaT.innerText = inputTar.value;
      mostrar.append(tareaDiv);
      mostrar.appendChild(tareaT);

      tareaT.addEventListener("dblclick", () => {
        mostrar.removeChild(tareaDiv);
        mostrar.removeChild(tareaT);
      })
    }
    document.querySelector("#inputTar").value = "";
  }); 
}

const mostrarResultadoBuscar = () => {
  const resultadoBuscarhtml = document.querySelector("#boxResultados");
  resultadoBuscarhtml.innerHTML = "";

  const inputBuscar = document.querySelector("#aBuscar").value;
  const resultadoBusqueda = tareas.find((tareas) => tareas.includes(inputBuscar));

  if (tareas.find((tareas) => tareas.includes(inputBuscar))) {
    const resultadoBuscar = `<p class="animate__animated animate__fadeInUp">${resultadoBusqueda}</p>`;
    resultadoBuscarhtml.innerHTML += resultadoBuscar;
  } else {
    resultadoBuscarhtml.innerHTML = `<p class="animate__animated animate__fadeInUp">No hay coincidencias</p>`;
  }

  document.querySelector("#aBuscar").value = "";
}

const guardarTareas = () => {
  tareas.length > 0 && localStorage.setItem("tareas", JSON.stringify(tareas));
}

const recuperarTareas = () =>  {
  tareasR = JSON.parse(localStorage.getItem("tareas"));
  mostrar.innerHTML = "<h3><b>Tareas:</b></h3>";

  tareasR.forEach(tar => {
    const tareaDiv = document.createElement("div");
    const tareaT = document.createElement("p");
    tareaT.className = "animate__animated animate__fadeInUp";
    tareaT.innerText = tar;
    mostrar.append(tareaDiv);
    mostrar.appendChild(tareaT);
    tareas.push(tar);
    guardarTareas()

    tareaT.addEventListener("dblclick", () => {
      mostrar.removeChild(tareaDiv);
      mostrar.removeChild(tareaT);
      tareas.remove();
      guardarTareas()
    })
  });
}

// const URL = "./usuario.json";

// const identificador = (info) => {
//   const {nombre, apellido} = info
//   const usuario = document.querySelector("#contenedorUsuario");
//   const mostrarNombre = `<p>De ${nombre} ${apellido}</p>;`
//   usuario.innerHTML += mostrarNombre;
// }

// const obtenerIdentificador = (URL)=> {
//   debugger
//   fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     for (info of data) {
//       identificador()
//     }
//   })
//   .catch(() => {
//     catchfire()
//   })
// }

