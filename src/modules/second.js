import getData from './getData.js';
import postData from './postData.js';
import renderGoods from './renderGoods.js';

const second = () => {
  const cartBtn = document.getElementById('cart');

  getData('second').then((data) => {
    // console.log('second getData: ', data);
    renderGoods(data);
  });

  // // создание товара и получение обновленного списка
  // cartBtn.addEventListener('click', () => {
  //   postData().then((data) => {
  //     console.log('second postData data: ', data);
  //     getData('second').then((data) => {
  //       console.log('second1111 getData data: ', data);
  //     });
  //   });
  // });
};

export default second;