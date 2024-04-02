// Sélection des éléments HTML
const items = document.querySelectorAll('.item');
const totalPrice = document.getElementById('totalPrice');

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
  let total = 0;
  items.forEach(item => {
    const quantity = parseInt(item.querySelector('.amount').innerText);
    const price = parseFloat(item.querySelector('.price').innerText.slice(1));
    total += quantity * price;
  });
  totalPrice.innerText = `$${total.toFixed(2)}`;
}

// Fonction pour ajuster la quantité
function adjustQuantity(item, increment) {
  const amountElement = item.querySelector('.amount');
  let amount = parseInt(amountElement.innerText);
  amount += increment;
  if (amount < 0) amount = 0;
  amountElement.innerText = amount;
  updateTotalPrice();
}

// Ajout des écouteurs d'événements
items.forEach(item => {
  item.querySelector('.plus').addEventListener('click', () => adjustQuantity(item, 1));
  item.querySelector('.minus').addEventListener('click', () => adjustQuantity(item, -1));
  item.querySelector('.remove').addEventListener('click', () => {
    item.remove();
    updateTotalPrice();
  });
  item.querySelector('.like').addEventListener('click', () => {
    item.querySelector('.like').classList.toggle('liked');
  });
});

// Mettre à jour le prix total initial
updateTotalPrice();
