// Hent nuværende kurv fra localStorage
export function getBasket() {
  const data = localStorage.getItem("basket");
  return data ? JSON.parse(data) : [];
}

// Tilføj ny vare til kurven
export function addToBasket(product) {
  const basket = getBasket();
  basket.push(product);
  localStorage.setItem("basket", JSON.stringify(basket));
}

// Vis kurven i fx basket-komponenten
export function renderBasket(containerSelector) {
  const basket = getBasket();
  const container = document.querySelector(containerSelector);
  if (!container) return;

  if (basket.length === 0) {
    container.innerHTML = "<p>Kurven er tom.</p>";
    return;
  }

  container.innerHTML = basket
    .map(
      (item) => `
      <div class="basket-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h3>${item.name}</h3>
          <p>${item.price}</p>
        </div>
      </div>
    `,
    )
    .join("");
}
