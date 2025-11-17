export const searchFilter = (goods, val) => {
  return goods.filter((good) => good.title.toLowerCase().includes(val.toLowerCase()));
};

export const categoryFilter = (goods, val) => {
  return goods.filter((good) => good.category.toLowerCase().includes(val.toLowerCase()));
};

