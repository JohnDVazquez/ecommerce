const BotonApi = document.getElementById("BotonApi");
const contenedorPersonajes = document.getElementById("ContenedorPersonajes")
const API = "https://rickandmortyapi.com/api/character";

BotonApi.addEventListener("click", () => {
    contenedorPersonajes.innerHTML = "";
    LlamarApi()
});

const LlamarApi = () => {
    fetch (API)
    .then (respuesta => respuesta.json())
    .then (informacion => informacion.results.forEach (personaje => {
        contenedorPersonajes.innerHTML +=
        `
           <div>
                <h2>${personaje.name}</h2>
                <img src="${personaje.image}" alt="${personaje.name}">
            </div>
        `
    }))
    contenedorPersonajes.classList.add ("grid");
}
//////////////////////////////
//api local
const BotonApi2 = document.getElementById("BotonApi2");
const contenedorPasteles = document.getElementById("ContenedorPasteles3")

BotonApi2.addEventListener("click", () => {
    contenedorPasteles.innerHTML = "";
    LlamarApi2()
});

const LlamarApi2 = () => {
    fetch ("productos.json")
    .then (respuesta1 => respuesta1.json())
    .then (productos => productos.forEach (pastel => {
        contenedorPasteles.innerHTML +=
        `
           <div>
                <h2>${pastel.nombre}</h2>
                <img src="${pastel.img}" alt="${pastel.nombre}">
            </div>
        `
    }))
    contenedorPasteles.classList.add ("grid2");
}
