const toggle = document.querySelector(".toggle-container__toggle");
const cards = Array.from(
  document.getElementsByClassName("pricing-container__card")
);

function updatePrices() {
  cards.forEach(function(card, index) {
    const price = card.querySelector(".dollar-value");
    if (toggle.checked) {
      switch (index) {
        case 0:
          price.textContent = 19.99;
          break;
        case 1:
          price.textContent = 29.99;
          break;
        case 2:
          price.textContent = 39.99;
          break;
      }
    } else {
      switch (index) {
        case 0:
          price.textContent = 199.99;
          break;
        case 1:
          price.textContent = 249.99;
          break;
        case 2:
          price.textContent = 399.99;
          break;
      }
    }
  });
}

toggle.addEventListener("click", updatePrices);
