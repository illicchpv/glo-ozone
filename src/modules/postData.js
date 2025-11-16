const postData = () => {

  // const res = fetch('http://localhost:3000/goods/b1d7', {
  //   method: 'DELETE',
  // })
  //   .then((response) => response.json());
  // //  .then((json) => console.log(json));

  // const res = fetch('http://localhost:3000/goods', {
  const res = fetch('https://mytest-4d899-default-rtdb.firebaseio.com/goods.json', {
    method: 'POST',
    body: JSON.stringify({
      title: "Новый фильм",
      price: 2222,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Кино"
    }
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  // .then((json) => console.log(json));

  return res;
};

export default postData;
