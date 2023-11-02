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
      alert(`el total de su cuenta es ${totalCuenta}£`);
      pidiendo = false;
    } else {
      alert("No tenemos esa bebida en nuestro menú.");
    }
  } while (pidiendo);
}
