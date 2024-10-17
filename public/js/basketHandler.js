
function addToBasket(added) {
   let sellThis = JSON.parse(localStorage.getItem(added));
   let amtBox = document.getElementById("amt"+sellThis["id"]);
   let cartBtn = document.getElementById("ITEM"+sellThis["id"]);

if(parseInt(sellThis["sold"]) > 49) {
   cartBtn.disabled = true
   cartBtn.textContent = "Sold Out";
}
   sellThis.sold = (Number(sellThis.sold) + 1);
   localStorage.setItem(added, JSON.stringify(sellThis));
   amtBox.textContent = 50 - parseInt(JSON.parse(localStorage.getItem(added)).sold);

   let currentBasket = JSON.parse(localStorage.getItem("BASKET")) || [];
   currentBasket.push(sellThis.id);
   localStorage.setItem("BASKET", JSON.stringify(currentBasket));


}