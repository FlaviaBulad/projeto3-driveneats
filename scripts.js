function selectDish(option1){
   let dish = document.querySelector(".dish-border");
   if (dish !== null) {
      dish.classList.toggle("dish-border");
   }
   option1.classList.add("dish-border");
   order();
 }