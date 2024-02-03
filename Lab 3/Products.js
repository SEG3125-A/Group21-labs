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

function showOnlyFruits(){
  document.getElementById("Fruits").style.visibility = "visible";
  document.getElementById("Meats").style.visibility = "hidden";
  document.getElementById("Bakery").style.visibility = "hidden";
  document.getElementById("Candy").style.visibility = "hidden";

}
function showOnlyMeats(){
  document.getElementById("Fruits").style.visibility = "hidden";
  document.getElementById("Meats").style.visibility = "visible";
  document.getElementById("Bakery").style.visibility = "hidden";
  document.getElementById("Candy").style.visibility = "hidden";
}
function showOnlyBakery(){
  document.getElementById("Fruits").style.visibility = "hidden";
  document.getElementById("Meats").style.visibility = "hidden";
  document.getElementById("Bakery").style.visibility = "visible";
  document.getElementById("Candy").style.visibility = "hidden";
}
function showOnlyCandy(){
  document.getElementById("Fruits").style.visibility = "hidden";
  document.getElementById("Meats").style.visibility = "hidden";
  document.getElementById("Bakery").style.visibility = "hidden";
  document.getElementById("Candy").style.visibility = "visible";
}

function showAll(){
  document.getElementById("Fruits").style.visibility = "visible";
  document.getElementById("Meats").style.visibility = "visible";
  document.getElementById("Bakery").style.visibility = "visible";
  document.getElementById("Candy").style.visibility = "visible";
}
