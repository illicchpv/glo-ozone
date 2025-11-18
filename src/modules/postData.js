const postData = (data) => {

  // const res = fetch('http://localhost:3000/goods/b1d7', {
  //   method: 'DELETE',
  // })
  //   .then((response) => response.json());
  // //  .then((json) => console.log(json));

  // const res = fetch('http://localhost:3000/goods', {
  // const res = fetch('https://mytest-4d899-default-rtdb.firebaseio.com/goods.json', {
  const res = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  // .then((json) => console.log(json));

  return res;
};

export default postData;
