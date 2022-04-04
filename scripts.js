function selectDish(option1) {
   let dish = document.querySelector(".dish-border");
   if (dish !== null) {
     dish.classList.toggle("dish-border");
   }
   option1.classList.add("dish-border");
   order();
 }
 
 function selectDrink(option2) {
   let drink = document.querySelector(".drink-border");
   if (drink !== null) {
     drink.classList.toggle("drink-border");
   }
   option2.classList.add("drink-border");
   order();
 }
 
 function selectDessert(option3) {
   let dessert = document.querySelector(".dessert-border");
   if (dessert !== null) {
     dessert.classList.toggle("dessert-border");
   }
   option3.classList.add("dessert-border");
   order();
 }
 
 function order() {
   let gray = document.querySelector(".footer-button");
   let green = document.querySelector(".footer-order");
   if (
     document.querySelector(".dish-border") !== null &&
     document.querySelector(".drink-border") !== null &&
     document.querySelector(".dessert-border") !== null
   ) {
     gray.classList.add("hidden");
     green.classList.remove("hidden");
   }
 }
 
 function whatsapp() {
   let name = prompt("Primeiro, seu nome");
   let address = prompt("Agora, seu endereço");
 
   let dishSelected = document.querySelector(".dish-border").querySelector("h4")
     .innerHTML;
   let drinkSelected = document
     .querySelector(".drink-border")
     .querySelector("h4").innerHTML;
   let dessertSelected = document
     .querySelector(".dessert-border")
     .querySelector("h4").innerHTML;
 
   let dishPrice = Number(
     document.querySelector(".dish-border").querySelector("p").innerHTML
   );
   let drinkPrice = Number(
     document.querySelector(".drink-border").querySelector("p").innerHTML
   );
   let dessertPrice = Number(
     document.querySelector(".dessert-border").querySelector("p").innerHTML
   );
 
   let total = Number(dishPrice + drinkPrice + dessertPrice).toFixed(2);
 
   let orderMessage = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${dishSelected}
    - Bebida: ${drinkSelected}
    - Sobremesa: ${dessertSelected}
    Total: R$ ${total}
  
    Nome: ${name}
    Endereço: ${address}`);
   document.querySelector(".footer-order").querySelector("a").href =
     "https://wa.me/5562999999999?text=" + orderMessage;
 }