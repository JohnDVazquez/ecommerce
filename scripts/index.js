const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");
const carritoOffcanvas = document.getElementById("carritoOffcanvas");
const precioTotalCarrito = document.getElementById("precioTotalCarrito");
const terminarCompra = document.getElementById("terminarCompra");

const pasteles = [
  {
    id: 1,
    nombre: "Pastel con diseño de meme",
    precio: 350,
    img: "./imagenes/Pastel c meme.png",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Pastel de chocolate y fresas",
    precio: 400,
    img: "./imagenes/pastel chocolate y fresas.PNG",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Pastel con diseño camioneta vw",
    precio: 340,
    img: "./imagenes/Pastel con diseño vw.jpeg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Pastel de cafe",
    precio: 250,
    img: "./imagenes/Pastel de cafe.png",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Pastel de chocolate",
    precio: 450,
    img: "./imagenes/pastel de chocolate.jpg",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Pastel de ferrero",
    precio: 450,
    img: "./imagenes/pastel de ferrero.jpg",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Pastel de fresa",
    precio: 420,
    img: "./imagenes/pastel de fresa.jpg",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Pastel de galleta oreo",
    precio: 350,
    img: "./imagenes/pastel de galleta oreo.png",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Pastel de moka",
    precio: 250,
    img: "./imagenes/Pastel de moka.jpg",
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Pastel de patricio",
    precio: 350,
    img: "./imagenes/Pastel de patricio.jpg",
    cantidad: 1,
  },
  {
    id: 11,
    nombre: "Pastel de piñon",
    precio: 500,
    img: "./imagenes/Pastel de piñon.jpg",
    cantidad: 1,
  },
  {
    id: 12,
    nombre: "Pastel estilo campestre",
    precio: 460,
    img: "./imagenes/Pastel estilo campestre.jpg",
    cantidad: 1,
  },
  {
    id: 13,
    nombre: "Cheescake tradicional",
    precio: 300,
    img: "./imagenes/cheescake.jpeg",
    cantidad: 1,
  },
  {
    id: 14,
    nombre: "Pastel de elmo",
    precio: 300,
    img: "./imagenes/elmo.jpg",
    cantidad: 1,
  },
  {
    id: 15,
    nombre: "Pastel de bodas est 1",
    precio: 500,
    img: "./imagenes/boda1.jpg",
    cantidad: 1,
  },
  {
    id: 15,
    nombre: "Pastel de bodas est 2",
    precio: 500,
    img: "./imagenes/boda2.jpg",
    cantidad: 1,
  },
];

const carrito = [];

pasteles.forEach((pastel) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card cardComidas">
        <img src="${pastel.img}" class="card-img-top imgComidas" alt="${pastel.nombre}">
        <div class="card-body cuerpoCard">
            <h3 class="card-title tituloComida">${pastel.nombre}</h3>
            <p class="card-text precioComida">Precio: $${pastel.precio} </p>
            <button class="btn btnAgregarCarrito" id="agregarCarrito${pastel.id}">AGREGAR AL CARRITO</button>
        </div>
    </div>
    `;
  contmaspedidos.appendChild(div);
  const botonAgregarCarrito = document.getElementById(
    `agregarCarrito${pastel.id}`
  );
  botonAgregarCarrito.addEventListener("click", () => {
    agregarAlCarrito(pastel.id, carrito);
    agregarContadorCarrito();
    actualizarCarrito();
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const agregarAlCarrito = (productoSeleccionado, carritoo) => {
  const productoExiste = carrito.some(
    (item) => item.id === productoSeleccionado
  );
  const productoElegido = pasteles.find(
    (item) => item.id === productoSeleccionado
  );
  if (productoExiste) {
    let precioInicial = productoElegido.precio;
    productoElegido.cantidad++;
    productoElegido.nprecio = productoElegido.cantidad * precioInicial;
  } else {
    carritoo.push(productoElegido);
  }
};

/////agregar contador
const agregarContadorCarrito = () => {
  if (carrito.length !== 0) {
    contadorCarrito.classList.add("contadorCarrito");
    contadorCarrito.textContent = carrito.length;
  } else {
    contadorCarrito.textContent = "";
    contadorCarrito.classList.remove("contadorCarrito");
  }
};

const actualizarCarrito = () => {
  carritoOffcanvas.innerHTML = "";
  carrito.forEach((pastel) => {
    tr = document.createElement("tr");
    tr.classList.add("tablaProductos");
    tr.innerHTML += `
            <td>
            <img src="${pastel.img}" alt="${pastel.nombre}">
            </td>
            <td class=infoProducto">${pastel.nombre}</td>
            <td class=infoProducto>${pastel.cantidad}</td>    
            <td class=infoProducto>${pastel.precio}</td>
            <td class="infoProducto eliminarProducto">
                <iconify-icon icon="material-symbols:delete-outline" class="deleteIconify" id="eliminar${pastel.id}"></iconify-icon>
            </td>
        `;
    carritoOffcanvas.appendChild(tr);

    const botonEliminar = document.getElementById(`eliminar${pastel.id}`);
    botonEliminar.addEventListener("click", () => {
      eliminarProducto(pastel.id);
    });
  });
  const totalCarrito = carrito.reduce(
    (acumulador, pastel) => acumulador + pastel.precio,
    0
  );
  precioTotalCarrito.innerText = `Precio total: $${totalCarrito}`;
};

const eliminarProducto = (productoClickeado) => {
  const productoEliminado = carrito.find(
    (pastel) => pastel.id === productoClickeado
  );
  const index = carrito.indexOf(productoEliminado);
  carrito.splice(index, 1);
  agregarContadorCarrito();
  actualizarCarrito();
};

terminarCompra.addEventListener("click", () => {
  swal("Gracias por tu compra!", "Vuelve pronto!", "success");
  carrito.innerText="";
  carritoOffcanvas.innerText="";
});


