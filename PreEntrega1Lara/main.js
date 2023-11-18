// alert(
//   "Hola, antes de comenzar necesitamos saber tu edad debido a la politica de uso responsable de bebidas alcoholicas, NO PODEMOS VENDER ALCOHOL A MENORES DE 18 AÑOS."
// );

// let edad = prompt("Que edad tienes?");
// if (edad >= 18) {
//   alert(
//     "Eres mayor de edad, puedes beber alcohol, recuerda beber con precaucion."
//   );
//   let nombre = prompt("Como te llamas?").toUpperCase();
//   pedirBebida(nombre);
// } else {
//   alert(
//     "Eres menor de edad, no podemos venderte alcohol, esperamos que nos entiendas."
//   );
// }

// function pedirBebida(nombre) {
//   pidiendo = true;
//   let totalCuenta = 0;
//   do {
//     let preferenciaCliente = prompt(
//       `Buenas ${nombre}, que desearias tomar, tenemos: \n\nmargarita 12£ \nmojito 10£ \ndaquiri 18£\n\n dime "pagar" cuando quieras abonar tu cuenta\n\n`
//     );
//     // // use la concatenacion y la interpolacion del codigo para mostras varias formas de hacerlo ademas hice uso del or || como ejemplo de lo que aprendi
//     if (
//       preferenciaCliente === "margarita" ||
//       preferenciaCliente === "Margarita"
//     ) {
//       alert("Marchando un Margarita para " + nombre + ".");
//       totalCuenta = totalCuenta + 12;
//     } else if (
//       preferenciaCliente === "mojito" ||
//       preferenciaCliente === "Mojito"
//     ) {
//       alert("Marchando un Mojito para " + nombre + ".");
//       totalCuenta = totalCuenta + 10;
//     } else if (preferenciaCliente === "daquiri") {
//       alert(`Marchando un Daquiri para ${nombre}.`);
//       totalCuenta = totalCuenta + 18;
//     } else if (preferenciaCliente === "pagar") {
//       alert(`el total de su cuenta es ${totalCuenta}£`);
//       pidiendo = false;
//     } else {
//       alert("No tenemos esa bebida en nuestro menú.");
//     }
//   } while (pidiendo);
// }

// de aqui para arriba a sido la primera entrega y de aqui para abajo estoy poniendo temarios que siguen entrando en la preetrega pero no los necesite usar

//                                 FOR

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   alert(
//     `vamos a contar hasta el 5 pero cuando lleguemos a 3(sin contarlo) vamos a salir del for con un break: ${i}`
//   );
// }
// -----------------------------------------------------------------------------------------

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   alert(`vamos a contar del 1 al 5 pero el 3 nos lo saltamos: ${i}`);
// }

//                                    WHILE

// let repetir = true;

// while (repetir === true) {
//   // mientras repetir sea === true se repetira infinito porque no sale del bucle
//   alert(
//     "se repite infinito hasta que el usuario clicke en cancelar poniendo el siguiente parametro que lo convierte el true que tenemos en un false"
//   );
//   repetir = confirm("desea seguir?");
// }

//                                  DO WHILE

// let cuenta = 1;

// do {
//   console.log(`contador hasta el 4: ${cuenta}`);
//   cuenta++;
// } while (cuenta < 5);

// SWITCH
// -----------------------------------------------------------------------------------------

// alert("bienvenido al concesionario de coches");

// let consulta = confirm("Te puedo ayudar ha buscar un coche?");

// if (consulta === true) {
//   let coche = prompt("Que marca de coche buscas?");
//   let color = prompt(
//     `De que color te gustaria tu nuevo ${coche}, de esa marca lo tenemos en blanco, negro o rojo.`
//   );
//   //   estructura del switch
//   switch (
//     color //dentro del switch va la KEY.
//   ) {
//     case "blanco":
//       alert(`Tenemos tu ${coche} en color ${color}`); //aca si se escribe el color, se manda este mensaje
//       break;
//     case "negro":
//       alert(`Tenemos tu nuevo ${coche} en color ${color}`);
//       break;
//     case "rojo":
//       alert(`Tenemos tu nuevo ${coche} en color ${color}`);
//       break;
//     default: //si no ocurre ninguna de las anteriores, se manda por default este mensaje
//       alert(`No tenemos tu coche marca ${coche} de color${color}`);
//       break;
//   }
//   //aca agregamos otro condicional para saber si lo quiere comprar
//   let comprar = confirm("Quieres comprar el coche?");
//   if (comprar === true) {
//     //si comprar es true, envia el alert de compra. sino sale del preograma
//     alert("Gracias por tu compra.");
//   }
// }

//           ////FUNCIONES

// function saludar() {
//   let nombre = prompt("Como te llamas?");
//   alert(`Bienvenido ${nombre}`);
// }

// saludar();

// FUNCION CON PARAMETROS

// function sumar(numA, numB) {
//   numA = parseInt(prompt("Escribe un numero"));
//   numB = parseInt(prompt("Escribe un numero"));
//   let resultado = numA + numB;
//   alert(`El resuldado es ${resultado}`);
// }

// sumar();

//       ////  Funcion normal

// const suma = function (a, b) {
//   return a + b;
// };
// const resta = function (a, b) {
//   return a - b;
// };
// console.log(suma(2, 2));
// console.log(resta(12, 10));

//        //// Funcion anonima

// let funcionAnonima = function (a, b) {
//   return a + b;
// };

//        //// Funcion flecha

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// console.log(suma(15, 15));
// console.log(resta(30, 15));

// ///        prueba para ver si soy capaz de completar el codigo

// console.log("bienvenido al concesionario de coches");
// let marca = prompt("que marca de coches buscas");
// console.log(`tenemos marca ${marca} disponible`);
// let color = prompt(
//   `en que color le gustaria tu nuevo ${marca}, tenemos blanco, verde y rojo`
// );
// if (color === "blanco") {
//   console.log(`bien! tenemos ${marca} en color ${color}`);
//   venta();
// } else if (color === "verde") {
//   console.log(`bien! tenemos ${marca} en color ${color}`);
//   venta();
// } else if (color === "rojo") {
//   console.log(`bien! tenemos ${marca} en color ${color}`);
//   venta();
// } else {
//   console.log(`lo siento! no tenemos ${marca} en color ${color}`);
// }

// function venta() {
//   let precioMinimo = 2000;
//   let vender = true;
//   do {
//     let ofertaCliente = parseInt(prompt(`cuanto ofreces por tu nuevo coche`));
//     if (ofertaCliente <= 1499) {
//       console.log(`${ofertaCliente} es un precio demasiado bajo`);
//     } else if (ofertaCliente > 1500 && ofertaCliente < precioMinimo) {
//       console.log(
//         `${ofertaCliente} es un precio ajustado, tienes que subir mas el precio para que podamos vendertelo`
//       );
//     } else {
//       console.log(`${ofertaCliente} es un buen precio`);
//       confirm(`desea comprar ${marca} en color ${color} por ${ofertaCliente}?`);
//       console.log(`Enhorabuena! esperamos que disfrutes de tu nueva compra!`);
//       vender = false;
//     }
//   } while (vender);
// }
