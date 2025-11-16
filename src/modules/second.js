import getData from './getData.js';

const second = () => {
  const cartBtn = document.getElementById('cart');
  // console.log('second cartBtn: ', cartBtn);
  // const res = getData('second');
  // console.log('second getData res: ', res);

  getData('second').then((data) => {
    console.log('second getData data: ', data);
  });
};

export default second;