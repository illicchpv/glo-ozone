const renderCart = (goods) => {
  // cart-total
  // cart-wrapper
  // id cart-empty

  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartTotal = document.querySelector('.cart-total > span');
  const cartSendBtn = document.querySelector('.cart-confirm');
  const cartCountSpan = document.querySelector('.counter');
  let cartCount = 0;

  cartWrapper.innerHTML = '';
  if (goods.length === 0) {
    cartWrapper.insertAdjacentHTML('beforeend', `
      <div id="cart-empty">Корзина пуста</div>
    `);
    cartSendBtn.style.visibility = 'hidden';
    cartTotal.textContent = 0;
    cartCountSpan.textContent = cartCount;
    return;
  }
  cartSendBtn.style.visibility = '';

  goods.forEach((good) => {
    cartCount += +good.count;

    cartWrapper.insertAdjacentHTML('beforeend', `
        <div class="card" data-key="${good.id}">
          ${good.sale ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ''}
          <div class="card-img-wrapper">
            <span class="card-img-top"
              style="background-image: url('${good.img}')"></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${good.price} ₽ <span class="card-count">${good.count} штук</span></div>
            <h5 class="card-title">${good.title}</h5>
            <button class="btn btn-primary">удалить 1</button>
          </div>
        </div>
    `);
  });

  cartTotal.textContent = goods.reduce((sum, good) => sum + good.price * good.count, 0);
  cartCountSpan.textContent = cartCount;
};

export default renderCart;
