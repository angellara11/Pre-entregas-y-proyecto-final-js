alert(
  "Hola, antes de comenzar necesito saber tu edad debido a la politica de uso responsable de bebidas alcoholicas, NO PODEMOS VENDER ALCOHOL A MENORES DE 18 AÑOS."
);

let edad = prompt("Que edad tienes?");
if (edad >= 18) {
  alert(
    "Eres mayor de edad, puedes beber alcohol, recuerda beber con precaucion."
  );
  let nombre = prompt("Como te llamas?").toUpperCase();
  pedirBebida(nombre);
} else {
  alert(
    "Eres menor de edad, no podemos venderte alcohol, esperamos que nos entiendas."
  );
}

function pedirBebida(nombre) {
  pidiendo = true;
  let totalCuenta = 0;
  do {
    let preferenciaCliente = prompt(
      `Buenas ${nombre}, que desearias tomar, tenemos: \n\nmargarita 12£ \nmojito 10£ \ndaquiri 18£\n\n dime "pagar" cuando quieras abonar tu cuenta\n\n`
    );
    // // use la concatenacion y la interpolacion del codigo para mostras varias formas de hacerlo ademas hice uso del or || como ejemplo de lo que aprendi
    if (
      preferenciaCliente === "margarita" ||
      preferenciaCliente === "Margarita"
    ) {
      alert("Marchando un Margarita para " + nombre + ".");
      totalCuenta = totalCuenta + 12;
    } else if (
      preferenciaCliente === "mojito" ||
      preferenciaCliente === "Mojito"
    ) {
      alert("Marchando un Mojito para " + nombre + ".");
      totalCuenta = totalCuenta + 10;
    } else if (preferenciaCliente === "daquiri") {
      alert(`Marchando un Daquiri para ${nombre}.`);
      totalCuenta = totalCuenta + 18;
    } else if (preferenciaCliente === "pagar") {
      alert(`el total de su cuenta es ${totalCuenta}`);
      pidiendo = false;
    } else {
      alert("No tenemos esa bebida en nuestro menú.");
    }
  } while (pidiendo);
}

// for (;;) {
//   let edad = prompt("Que edad tienes?");
//   if (edad >= 18) {
//     alert(
//       "Eres mayor de edad, puedes beber alcohol, recuerda beber con precaucion."
//     );
//     break;
//   } else if (edad === "") {
//     alert("Por favor, ingresa una edad");
//   } else {
//   }
// }

// let nombre = prompt("Como te llamas?").toUpperCase();
// let preferenciaCliente = prompt(
//   `Buenas ${nombre}, que desearias tomar, tenemos margarita, mojito y daquiri.`
// );

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
