import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import {searchFilter} from "./filter.js";

const search = () => {

  const searchInput = document.querySelector('.search-wrapper_input');
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    console.log('val: ', val);

    getData(val).then((data) => {
      renderGoods(searchFilter(data, val));
    });

  });

};

export default search;
