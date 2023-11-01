// // Declaración de variables
// let nombre = prompt("Como te llamas?");
// let edad = prompt("Que edad tienes?");

// // Función que saluda
// function saludar(nombre) {
//   alert("¡Hola, " + nombre + "!");
// }

// // Función que determina si una persona es mayor de edad
// function esMayorDeEdad(edad) {
//   if (edad >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Control de flujos
// if (esMayorDeEdad(edad)) {
//   saludar(nombre);
//   alert("Eres mayor de edad.");
// } else {
//   saludar(nombre);
//   alert("Eres menor de edad.");
// }

// // Ciclo - Bucle for
// for (let i = 1; i <= 5; i++) {
//   alert("Iteración #" + i);
// }

// // Interacciones con el usuario
// let numero = prompt("Ingresa un número:");
// numero = parseInt(numero);

// if (!isNaN(numero)) {
//   alert("El doble de " + numero + " es " + (numero * 2));
// } else {
//   alert("No ingresaste un número válido.");
// }

alert(
  "Hola, antes de comenzar necesito saber tu edad debido a la politica de uso responsable de bebidas alcoholicas, NO PODEMOS VENDER ALCOHOL A MENORES DE 18 AÑOS."
);

for (;;) {
  let edad = prompt("Que edad tienes?");
  if (edad >= 18) {
    alert(
      "Eres mayor de edad, puedes beber alcohol, recuerda beber con precaucion."
    );
    break;
  } else if (edad === "") {
    alert("Por favor, ingresa una edad");
  } else {
    alert(
      "Eres menor de edad, no podemos venderte alcohol, esperamos que nos entiendas."
    );
  }
}

let nombre = prompt("Como te llamas?").toUpperCase();
let preferenciaCliente = prompt(
  `Buenas ${nombre}, que desearias tomar, tenemos margarita, mojito y daquiri.`
);

if (preferenciaCliente === "margarita" || preferenciaCliente === "Margarita") {
  alert("Marchando un Margarita para " + nombre + ".");
} else if (preferenciaCliente === "mojito" || preferenciaCliente === "Mojito") {
  alert("Marchando un Mojito para " + nombre + ".");
} else if (preferenciaCliente === "daquiri") {
  alert(`Marchando un Daquiri para ${nombre}.`);
} else {
  alert("No tenemos esa bebida en nuestro menú.");
}

// function loguear(){

//   let identificar = true
//   let intentos = 1

//   do{
//       let usuario = prompt("ingresa tu usuario (solo 3 intentos)")
//       if(usuario === null){ //si usser es null se salta al siguiente paso
//           break
//       }

//       if(usuario== "javier gimenez"  && intentos <=3){
//           alert("bienvenido usuario " + usuario)
//           identificar = false
//       }else{
//           alert("no se reconoce el usuario " + usuario)
//           intentos++
//           if(intentos >3){
//               alert("usted supero los 3 intentos, vuelva mas tarde")
//               console.error("no se reconoce el usuario")
//               break
//           }
//       }

//   }while(identificar)

// }

// loguear()
