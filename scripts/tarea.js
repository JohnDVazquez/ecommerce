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

const pastelesFiltro = pasteles.filter(item => item.precio > 350);
console.log("Los pasteles mas caros del menu son :", pastelesFiltro);
// find, me ayuda a agregar cantidad a un elemento si es que ya existe en el carrito.
const pastelElegido = pasteles.find(e => e.id = 12);
console.log("El pastel elegido es :" ,pastelElegido);

//some
const nombre = pasteles.some (elemento => elemento.nombre == "Pastel de piñon");
console.log("El producto existe? ", nombre);

//map Metodo que retorna un nuevo array generado con la recorrida de cada elemento del array. (ME retorna otro array) Agregar cantidad al carrito
const mitadDePrecio = pasteles.map(item => item.precio * 0.5);
console.log("Los precios originales son: ", pasteles);
console.log("El precio de mis productos con descuento es: ", mitadDePrecio);

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

const arrayPrecios = carrito.map( item => item.precio);
console.log("El nuevo array de precios es :", arrayPrecios);

const precioFinal = arrayPrecios.reduce((totalcarrito, precios) => totalcarrito + precios)
console.log("El valor a pagar es: ", precioFinal);

//SORT
const menorPrecio = pasteles.sort ((pastel1, pastel2) => pastel1.precio - pastel2.precio);
console.log("De mas barato a mas caro", menorPrecio);

// ACTIVIDAD 8
let zapatos = [
    {marca:'NIKE', stock:8, precio:150.30 },
    {marca:'PUMA', stock:7, precio:80.5 },
    {marca:'ADIDAS', stock:6, precio:70.41 },
    {marca:'CONVERSE', stock:8, precio:120.8 },
    {marca:'CHARLY ', stock:2, precio:301.2 },
]
// 1
zapatos.forEach (zapato => 
    {
        console.log(zapato.marca, zapato.stock)
    });

//2
const zapatoFiltro = zapatos.filter(item => item.precio > 200);
console.log("Zapatos con precio mayor a 200 :", zapatoFiltro);

//3
const arrayPromedio = zapatos.map( item => item.precio);
console.log("El nuevo array de precios es :", arrayPromedio);

const promedio = arrayPromedio.reduce((Promedio, precios) => Promedio + precios, 0)
console.log("El valor promedio de los productos es: ", promedio/5);

//4
const ordenAlfabetico = zapatos.sort ((item1, item2) => {
    if (item1.marca == item2.marca){
        return 0
    }
    else if(item1.marca < item2.marca){
        return -1
    }
    else {
        return 1
    }
});

console.log("En orden alfabetico", ordenAlfabetico);

//5
const mayorPrecio = zapatos.sort ((precio1, precio2) => precio2.precio - precio1.precio);
console.log("as caro", mayorPrecio);

const precioMayor = mayorPrecio.map( item => item.precio);
const [x, ] = precioMayor;
console.log("El precio redondeado es:", Math.floor(x));

//ACTIVIDAD 9
//console.log (document);

//Como acceder a mis elementos del Dom?
//queryselector
//console.log(document.querySelector("h1")); //Primer etiqueta que cumpla con el selector
//console.log(document.querySelector(".clase")); //primer clase que coincida con el selector
//console.log(document.querySelector("#")) //el id es unico

//queryselectorall() "Trae a todos los elementos que coincidan con el selector"
//console.log(document.querySelectorAll("div")); //Todos los elementod que coincidan con el selector
//console.log(document.querySelectorAll(".clase")); //Todos los elementod que coincidan con el selector

//getelementbyid

//const contenedorProductos = document.getElementById ("idsin hastagh");

//////////////////////////////////////////////////////////////////////////////
//como modificar elementos del DOM
const parrafo = document.querySelector("p");

//parrafo.textContent="Este parrafo esta siendo creado con DOM"

//inerhtml
//parrafo.innerHTML="<span>Ahora estoy modificando desde inner</span>" //el inner permite agregar html
/////////////////////////////////////////////////////////////////////////////////////
//como agregar una clase
//parrafo.classList.add('clasePrueba', 'clase2','clase50')
//////////////////////////////////////////////////////////////////////////////////////////
//como agregar etiquetas



//1
document.querySelector("h1").textContent = "Hola Mexico"

//2
document.querySelector("h2").textContent = "Crea una lista con Javascript"
document.querySelector(".li1").textContent = "Producto a"
document.querySelector(".li2").textContent = "Producto b"
document.querySelector(".li3").textContent = "Producto c"

//3
let zapatos2 = [
    {marca:'NIKE', stock:8, precio:150.30 },
    {marca:'PUMA', stock:7, precio:80.5 },
    {marca:'ADIDAS', stock:6, precio:70.41 },
    {marca:'CONVERSE', stock:8, precio:120.8 },
];

const contenedorProductos = document.getElementById("contenedorProductos");

zapatos2.forEach (item => {
    contenedorProductos.innerHTML += 
    `<div>
        <h5> Marca: ${item.marca} </h5>
        <img src="${item.imagen}" alt="${item.marca}">
        <p> Stock: ${item.stock}</p>
        <p> Precio: ${item.precio}</p>
    </div>
    `
});

//contenedorProductos.remove(); //funcion para eliminar productos de mi carrito