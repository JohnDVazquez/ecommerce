//ejercicio 1
function sumar(numero1, numero2, numero3) {
  const resultado = numero1 + numero2 + numero3;
  console.log(resultado);
}
sumar(15, 20, 2);

//ejercicio 2
function comparar(x, y) {
  if (x > y) {
    console.log("El número " + x + " es mayor");
  } else if (x < y) {
    console.log("El número " + y + " es mayor");
  } else if (x == y) {
    console.log("Los dos números son iguales");
  }
}
comparar(20, 11);

//ejercicio 3

const sumar2 = (a, b, c) => {resultado2 = a + b + c; 
    console.log(resultado2);
} 
sumar2(15, 20, 2);

const comparar2 = (v,n) => {
    if (v > n) {
        console.log("El número " + v + " es mayor");
      } else if (v < n) {
        console.log("El número " + n + " es mayor");
      } else if (v == n) {
        console.log("Los dos números son iguales");
      }
}
comparar2(20,11);

//ejercicio 4
const gato = {
  color: "atigrado",
  tamaño: "chico",
  numeroDePies: 4,
  comidaFavorita: "atun",
  pasatiempo: "dormir",
}

const { color, pasatiempo, comidaFavorita } = gato;
console.log("Mi gato es de color " + color + ", su comida favorita es el " +
    comidaFavorita + " y su pasatiempos favorito es " + pasatiempo
)

//ejercicio 5
const descripcion = ["Jonathan", 22, 2676406, educacion=["Ing. mecanica y electrica", " y programación"]
]
const [nombre, edad, , estudios]=descripcion;
console.log("Hola, me llamo " + nombre + ", tengo " + edad + " años de edad y estoy tratando de estudiar " + estudios + " sin morir en el intento :)")