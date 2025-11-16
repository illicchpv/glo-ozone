/*
<label>Id: <input type="text" id="testId"></input></label>
<div style="display: flex; flex-direction: column; gap: 10px;">
  <button id="testGetBtn">Получить</button>
  <button id="testDeleteBtn">Удалить</button>
</div>
<pre id="testPre">
  
</pre>
*/

const SERVICE_URL = 'https://mytest-4d899-default-rtdb.firebaseio.com/goods';

export const testModule = () => {
  const testId = document.getElementById('testId');
  const testGetBtn = document.getElementById('testGetBtn');
  const testPostNewBtn = document.getElementById('testPostNewBtn');
  const testDeleteBtn = document.getElementById('testDeleteBtn');
  const testPre = document.getElementById('testPre');

  testGetBtn.addEventListener('click', () => {
    const id = testId.value.trim();
    if (!id) {testId.focus(); return;}

    getDataById(id).then(data => {
      testPre.textContent = JSON.stringify(data, null, 2);
    });
  });

  testPostNewBtn.addEventListener('click', () => {
    const data = {
      title: "Новый фильм",
      price: 2222,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Кино"
    };

    postNewData(data).then(data => {
      const newId = data.name;
      console.log('newId: ', newId);
      testId.value = newId;

      getDataById(newId).then(data => {
        testPre.textContent = JSON.stringify(data, null, 2);
      });
    });
  });

  testDeleteBtn.addEventListener('click', () => {
    const id = testId.value.trim();
    if (!id) {testId.focus(); return;}

    deleteDataById(id).then(data => {
      testPre.textContent = JSON.stringify(data, null, 2);
    });
  });
};
export default testModule;

const postNewData = (data) => {
  const url = `${SERVICE_URL}.json`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json());
};

const deleteDataById = (id) => {
  const url = `${SERVICE_URL}/${id}.json`;
  return fetch(url, {
    method: 'DELETE'
  })
    .then(response => response.json());
};

const getDataById = (id) => {
  const url = `${SERVICE_URL}/${id}.json`;
  return fetch(url)
    .then(response => response.json());
};

// поиск по id
// https://mytest-4d899-default-rtdb.firebaseio.com/goods/${id}.json

// Найти товар по названию
// https://mytest-4d899-default-rtdb.firebaseio.com/goods.json?orderBy="name"&equalTo="Нужное название"

// Найти товары с ценой 1000
// `https://mytest-4d899-default-rtdb.firebaseio.com/goods.json?orderBy="price"&equalTo=1000`;

// Товары дороже 500
// `https://mytest-4d899-default-rtdb.firebaseio.com/goods.json?orderBy="price"&startAt=500`;

// Найти товары, названия которых начинаются на "тел"
// const searchText = "тел";
// const url = `https://mytest-4d899-default-rtdb.firebaseio.com/goods.json?orderBy="name"&startAt="${searchText}"&endAt="${searchText}\uf8ff"`;

