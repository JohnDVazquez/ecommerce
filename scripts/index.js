const pasteles = [
    {id:1, nombre:"Pastel con diseño de meme", precio: 350, img:"../imagenes/Pastel c meme.jpeg"},
    {id:2, nombre:"Pastel de chocolate y fresas", precio: 400, img:"../imagenes/pastel chocolate y fresas.PNG"},
    {id:3, nombre:"Pastel de vw", precio: 340, img:"../imagenes/Pastel con diseño vw.jpeg"},
    {id:4, nombre:"Pastel de cafe", precio: 250, img:"../imagenes/Pastel de cafe.png"},
    {id:5, nombre:"Pastel de chocolate", precio: 450, img:"../imagenes/pastel de chocolate.jpg"},
    {id:6, nombre:"Pastel de ferrero", precio: 450, img:"../imagenes/pastel de ferrero.jpg"},
    {id:7, nombre:"Pastel de fresa", precio: 420, img:"../imagenes/pastel de fresa.jpg"},
    {id:8, nombre:"Pastel de galleta oreo", precio: 350, img:"../imagenes/pastel de galleta oreo.png"},
    {id:9, nombre:"Pastel de moka", precio: 250, img:"../imagenes/Pastel de moka.jpg"},
    {id:10, nombre:"Pastel de patricio", precio: 350, img:"../imagenes/Pastel de patricio.jpg"},
    {id:11, nombre:"Pastel de piñon", precio: 500, img:"../imagenes/Pastel de piñon.jpg"},
    {id:12, nombre:"Pastel estilo campestre", precio: 460, img:"../imagenes/Pastel estilo campestre.jpg"},
    {id:13, nombre:"Cheescake tradicional", precio: 300, img:"../imagenes/cheescake.jpeg"},
];

const carrito = [];

const agregarAlCarrito = (producto, carrito) => {
    carrito.push(producto);
    console.log("Se agrego con exito el producto!");
}
////////////////////////////////////////////////////////////////////////////
const contenedorProductos = document.getElementById("contmaspedidos");

pasteles.forEach (pastel => {
    contenedorProductos.innerHTML += 
    `
    <div class="card cardComidas">
        <img src="${pastel.img}" class="card-img-top imgComidas" alt="${pastel.nombre}">
        <div class="card-body cuerpoCard">
            <h3 class="card-title tituloComida">${pastel.nombre}</h3>
            <p class="card-text precioComida">Precio: $${pastel.precio} </p>
            <button class="btn btnAgregarCarrito" id="${pastel.id}">AGREGAR AL CARRITO</button>
        </div>
    </div>
    `
})
