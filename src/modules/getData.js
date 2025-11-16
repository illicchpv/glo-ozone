const getData = (str) => {
  // https://jsonplaceholder.typicode.com/todos/1
  // https://jsonplaceholder.typicode.com/users/1/posts
  // https://jsonplaceholder.typicode.com/users/1
  // https://jsonplaceholder.typicode.com/users
  const res = fetch('https://jsonplaceholder.typicode.com/users') 
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    // .then((data) => {
    //   console.log(data);
    // });
  return res;
};

export default getData;
