import postData from "./postData.js";
import renderCart from "./renderCart.js";

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');
  const goodsWrapper = document.querySelector('.goods');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartSendBtn = document.querySelector('.cart-confirm');

  const openCart = () => {
    cartModal.style.display = 'flex';
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    renderCart(cart);
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);

  goodsWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      // console.log('event: ', e, e.target.closest('.card').dataset.key);
      const card = e.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem('goods'));
      const good = goods.find((good) => good.id == key);
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const cartItem = cart.find((item) => item.id == key);
      if (cartItem) {
        cartItem.count++;
      } else {
        cart.push({
          ...good,
          count: 1,
        });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      // console.log(good);
      renderCart(cart);
    }
  });

  cartWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      const card = e.target.closest('.card');
      const key = card.dataset.key;
      let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const cartItem = cart.find((item) => item.id == key);
      if (cartItem) {
        cartItem.count--;
      }
      cart = cart.filter((item) => item.count > 0);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart(cart);
    }
  });

  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    postData(cart).then((res) => {
      localStorage.removeItem('cart');
      renderCart([]);
    });
  });
};

{
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  renderCart(cart);
}

export default cart;
