import {categoryFilter, searchFilter} from "./filter.js";
import getData from "./getData.js";
import renderGoods from "./renderGoods.js";

const catalog = () => {
  const catalogButton = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItems = document.querySelectorAll('.catalog li');

  let isOpen = false;

  catalogButton.addEventListener('click', () => {
    isOpen = !isOpen;
    catalogModal.style.display = isOpen ? 'block' : 'none';
  });

  catalogModalItems.forEach((item) => {
    item.addEventListener('click', () => {
      const text = item.textContent;
      console.log(text);

      getData(text).then((data) => {
        renderGoods(categoryFilter(data, text));
      });
    });
  });

};

export default catalog;