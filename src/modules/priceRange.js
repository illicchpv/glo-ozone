import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import {hotSaleFilter, priceRangeFilter} from "./filter.js";



const priceRange = () => {
  const checkInput = document.querySelector('.filter-check_checkbox');
  const checkMark = document.querySelector('.filter-check_checkmark');
  const priceRange = document.querySelector('.filter-price_range');
  const priceMin = min;
  const priceMax = max;

  const commonFilter = (data) => {
    return hotSaleFilter(priceRangeFilter(data, priceMin.value, priceMax.value), checkInput.checked);
  };

  priceRange.addEventListener('input', () => {
    getData('').then((data) => {
      renderGoods(commonFilter(data));
    });
  });

  checkInput.addEventListener('change', () => {
    if (checkInput.checked) {
      checkMark.classList.add('checked');
    } else {
      checkMark.classList.remove('checked');
    }

    getData('').then((data) => {
      renderGoods(commonFilter(data));
      // renderGoods(hotSaleFilter(data, checkInput.checked));
    });
  });

};

export default priceRange;
