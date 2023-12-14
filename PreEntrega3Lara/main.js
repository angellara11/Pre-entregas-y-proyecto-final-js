// const payButton = document.getElementById("pay-button");
// const screenListDrink = document.getElementById("screen-list-drinks");

// let total = 0;
// const drinks = [
//   { name: "Rum Grog", price: 14 },
//   { name: "Turtle Spit", price: 16 },
//   { name: "Rum Honey Grog", price: 21 },
// ];

// const onDrinkClicked = function (event) {
//   const nameClicked = event.target.innerText;
//   const found = drinks.find((element) => element.name === nameClicked);
//   total = found.price + total;
//   payButton.textContent = `Pay ${total} Golden Coins`;

//   const listElement = document.createElement("li");
//   listElement.textContent = `--: ${found.name} :-- price: ${found.price} Golden Coins`;
//   screenListDrink.appendChild(listElement);
// };
// const drinkContainer = document.getElementById("drink-container");

// for (let i = 0; i < drinks.length; i++) {
//   let newElement = document.createElement("button");
//   newElement.textContent = `${drinks[i].name}`;
//   newElement.addEventListener("click", onDrinkClicked);
//   drinkContainer.appendChild(newElement);
// }

// payButton.addEventListener("click", function () {
//   bill.innerHTML = "";
//   let newBillElement = document.createElement("p");
//   newBillElement.textContent = `La cuenta esta pagada, aqui esta tu recibo\n\nTotal:  ${total} Golden Coins\n\nGracias por su visita, le esperamos de nuevo muy pronto.`;
//   bill.appendChild(newBillElement);

//   localStorage.setItem(new Date().toLocaleString(), JSON.stringify(total));
//   total = 0;
//   payButton.textContent = `Pay ${total} Golden Coins`;
//   screenListDrink.innerHTML = "";
// });

// const button = document.getElementById("pay-button");
// button.addEventListener("click", () => {
//   console.log("Fetch API");

//   fetch("https://rickandmortyapi.com/api/character")
//   .then((response) =>
//     response.json()
//   .then((data) => console.log(data))
//   );

//   function renderCharacters(characters) {
//     characters.forEach((element) => {
//       div.innerHTML += `<img src="${element.image}">`;
//     });
//   }
// });

async function fetchF() {
  const myFetch = await fetch("https://rickandmortyapi.com/api/character");
  console.log(myFetch);

  function successFn(response) {
    console.log(response);
  }

  // myFetch.then(successFn);
  // myFetch.catch(() => console.log("soy un error"));
  return "no se que soy";
}

console.log(fetchF());

// function promiseDos() {
//   this.then = (cb) => {
//     setTimeout(() => {
//       cb("resultado");
//     }, 5000);
//   };
// }
// const promiseTres = new promiseDos();
// const successFunction = (res) => {
//   console.log(res);
// };
// promiseTres.then(successFunction);
