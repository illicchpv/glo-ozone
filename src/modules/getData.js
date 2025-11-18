const getData = (searchText) => {
  // https://jsonplaceholder.typicode.com/todos/1
  // https://jsonplaceholder.typicode.com/users/1/posts
  // https://jsonplaceholder.typicode.com/users/1
  // https://jsonplaceholder.typicode.com/users
  // https://jsonplaceholder.typicode.com/users

  // const res = fetch('http://localhost:3000/goods') 
  // const res = fetch('https://mytest-4d899-default-rtdb.firebaseio.com/goods.json') 
  // https://mytest-4d899-default-rtdb.firebaseio.com/goods.json?startAt="${searchText}"`
  // не работает :( const url = `https://mytest-4d899-default-rtdb.firebaseio.com/goods.json?orderBy="title"&startAt="${searchText}"`;
  const url = `https://mytest-4d899-default-rtdb.firebaseio.com/goods.json`;
  // console.log('getData url: ', url);
  const res = fetch(url) //('https://mytest-4d899-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
      // console.log(response);
      return response.json();
    });
  // .then((data) => {
  //   console.log(data);
  // });
  return res;
};

export default getData;
