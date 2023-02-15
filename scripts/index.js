//let string = "Juan";
//console.log(string);
//let numero = 221321;
//console.log(numero);
//let booleano = false;
//console.log(booleano);
//let indefinido = undefined;
//console.log(indefinido);
//let vacio = null;
//console.log(vacio);

//let nombre = "Jonathan";
//let edad = 22;
//console.log(
//    "Hola, soy " +
//    nombre +
//    " y tengo " +
//    edad +
//    " años y estoy practicando concatenacion"
//);
//console.log(
//    `Hola, soy ${nombre} tengo ${edad} años y estoy practicando interpolacion`
//);

//let x = 58;
//let y = 19;
//z = x + y;
//console.log(`El resultado de la suma es ${z}`);

//console.log(x == y);


const pasteles = [
    {id:1, nombre:"Pastel con diseño de meme", precio: 350, img:"img.jpg"},
    {id:2, nombre:"Pastel de chocolate y fresas", precio: 400, img:"img.jpg"},
    {id:3, nombre:"Pastel de vw", precio: 340, img:"img.jpg"},
    {id:4, nombre:"Pastel de cafe", precio: 250, img:"img.jpg"},
    {id:5, nombre:"Pastel de chocolate", precio: 450, img:"img.jpg"},
    {id:6, nombre:"Pastel de ferrero", precio: 450, img:"img.jpg"},
    {id:7, nombre:"Pastel de fresa", precio: 420, img:"img.jpg"},
    {id:8, nombre:"Pastel de galleta oreo", precio: 350, img:"img.jpg"},
    {id:9, nombre:"Pastel de moka", precio: 250, img:"img.jpg"},
    {id:10, nombre:"Pastel de patricio", precio: 350, img:"img.jpg"},
    {id:11, nombre:"Pastel de piñon", precio: 500, img:"img.jpg"},
    {id:12, nombre:"Pastel estilo campestre", precio: 460, img:"img.jpg"},
    {id:13, nombre:"Cheescake tradicional", precio: 300, img:"img.jpg"},
];

const carrito = [];

const agregarAlCarrito = (producto, carrito) => {
    carrito.push(producto);
    console.log("Se agrego con exito el producto al carrito!");
}

agregarAlCarrito(pasteles[0], carrito);
agregarAlCarrito(pasteles[1], carrito);
agregarAlCarrito(pasteles[5], carrito);

console.log("Carrito de compras", carrito);

let suma = 0;
for (let i=0; i < carrito.length; i++){
    console.log ("TOTAL DEL CARRITO DE: $ ", suma += carrito[i].precio);
}

//pasteles.forEach(pasteles => {
    console.log(pasteles.nombre)
//});

//FILTER

const pastelesFiltrado = pasteles.filter(item => item.precio > 400);

console.log("Los pasteles mas caros del menu son :" , pastelesFiltrado);

const filtradoNombre = pasteles.filter(item => item.nombre.includes("Ch"));

console.log("Los productos que contienen c, son: ", filtradoNombre);