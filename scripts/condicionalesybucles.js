let edad = 15
if (edad>=18){
    console.log("Aprovado");
}else{
    console.log("No valido");
};

let camiones = [
    {marca:'Freightliner', carga:"15 Toneladas", modelo:'2018', color:'rojo'},
    {marca:'Scania', carga:"17 Toneladas", modelo:'2013', color:'azul'},
    {marca:'Volvo', carga:"18 Toneladas", modelo:'2005', color:'blanco'},
    {marca:'Mercedes Benz', carga:"12 Toneladas", modelo:'2023', color:'amarillo'},
]

for(i=0; i < camiones.length; i++){
console.log("La marca del camion es: " + camiones[i].marca);
};

let edad2 = 62
switch(edad2){
    case 12:
        console.log("Tienen un 20% de descuento en cualquier funcion infantil(obligatorio estar acompaado de un adulto)");
    case 23:
        console.log("Los adultos tienen un 15% de descuento en sus boleto en todas las funciones");
    case 62:
        console.log("Las personas de la tercera edad cuentan con 50% de descuento en sus boleto de etrada");
    default:
        console.log("Su edad no cuenta con ninguna promocion");
        break;
    }
