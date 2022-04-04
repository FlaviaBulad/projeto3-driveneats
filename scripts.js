function selectDish(option1){
   let dish = document.querySelector(".dish-border");
   if (dish !== null) {
      dish.classList.toggle("dish-border");
   }
   option1.classList.add("dish-border");
   
 }
 
 function selectDrink(option2){
    let drink = document.querySelector(".drink-border");
    if (drink !== null) {
       drink.classList.toggle("drink-border");
    }
    option2.classList.add("drink-border");
    
  }
 
  function selectDessert(option3){
    let dessert = document.querySelector(".dessert-border");
    if (dessert !== null) {
       dessert.classList.toggle("dessert-border");
    }
    option3.classList.add("dessert-border");
    
  }