export const searchFilter = (goods, val) => {
  return goods.filter((good) => good.title.toLowerCase().includes(val.toLowerCase()));
};

export const categoryFilter = (goods, val) => {
  return goods.filter((good) => good.category.toLowerCase().includes(val.toLowerCase()));
};

export const priceRangeFilter = (goods, min, max) => {
  if (!min && !max) return goods;
  if (!max) {
    min = +min;
    return goods.filter((good) => good.price >= min);
  }
  if (!min) {
    return goods.filter((good) => good.price <= max);
  }
  if (min > max) [max, min] = [min, max];
  return goods.filter((good) => good.price >= min && good.price <= max);
};

export const hotSaleFilter = (goods, val) => {
  if(!val) return goods;
  return goods.filter((good) => good.sale === true);
};
