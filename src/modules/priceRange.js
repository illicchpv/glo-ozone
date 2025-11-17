import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { priceRangeFilter } from "./filter.js";

const priceRange = () => {
  const priceRange = document.querySelector('.filter-price_range');
  const priceMin = min
  const priceMax = max

  priceRange.addEventListener('input', () => {
      getData('').then((data) => {
        renderGoods(priceRangeFilter(data, priceMin.value, priceMax.value));
      });    
  });
};

export default priceRange;