var currentBasket = document.getElementById("currentBasket");
var items = JSON.parse(localStorage.getItem("basket") || "[]");
var totalPrice = 0;
window.onload = (event) => {
  for (var i = 0; i < items.length; i++) {
    currentBasket.innerHTML +=
      "$" + items[i].price + " - " + items[i].name + "\n";
    totalPrice += items[i].price;
  }
  currentBasket.innerHTML += "\n\nCurrent Total: $" + totalPrice;
};

function goToProductsPage() {
  window.location.href = "Products.html";
}

function goToCustomerPage() {
  window.location.href = "Customer.html";
}

function resetCart() {
  currentBasket.innerHTML = "";
  localStorage.setItem("basket", JSON.stringify([]));
  alert("Congrats. You have checked out and spent $" + totalPrice);
}
