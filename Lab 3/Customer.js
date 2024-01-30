var options = JSON.parse(localStorage.getItem("preferences")) || [
  false,
  false,
  false,
];

function goToProductsPage() {
  window.location.href = "Products.html";
}

function goToCartPage() {
  window.location.href = "Cart.html";
}
window.onload = (event) => {
  document.getElementById("vegetarianOption").checked = options[0];
  document.getElementById("noGlutenOption").checked = options[1];
  document.getElementById("organicOption").checked = options[2];
  localStorage.setItem("preferences", JSON.stringify(options));
};

function saveChanges() {
  options[0] = document.getElementById("vegetarianOption").checked;
  options[1] = document.getElementById("noGlutenOption").checked;
  options[2] = document.getElementById("organicOption").checked;
  localStorage.setItem("preferences", JSON.stringify(options));
}

function resetChanges() {
  document.getElementById("vegetarianOption").checked = false;
  document.getElementById("noGlutenOption").checked = false;
  document.getElementById("organicOption").checked = false;
  localStorage.setItem("preferences", JSON.stringify(options));
}
