var options = JSON.parse(localStorage.getItem("preferences"));
if (options[0] == true) {
  document.getElementById("itemChicken").style.visibility = "hidden";
  document.getElementById("itemBeef").style.visibility = "hidden";
}
if (options[1] == true) {
  document.getElementById("itemCandy").style.visibility = "hidden";
  document.getElementById("itemCake").style.visibility = "hidden";
  document.getElementById("itemBread").style.visibility = "hidden";
  document.getElementById("itemGranolaBar").style.visibility = "hidden";
}
if (options[2] == true) {
  document.getElementById("itemSoftDrink").style.visibility = "hidden";
  document.getElementById("itemCandy").style.visibility = "hidden";
  document.getElementById("itemBMBurger").style.visibility = "hidden";
}

var currentBasket = JSON.parse(localStorage.getItem("basket")) || [];
function addToBasket(item) {
  var price = parseFloat(item.getAttribute("price"));
  var name = item.innerText.split(" - ")[1];
  currentBasket.push({ name: name, price: price });
}

function submitBasket() {
  currentBasket.sort((a, b) => a.price - b.price);
  localStorage.setItem("basket", JSON.stringify(currentBasket));
}

function goToCartPage() {
  window.location.href = "Cart.html";
}

function goToCustomerPage() {
  window.location.href = "Customer.html";
}
