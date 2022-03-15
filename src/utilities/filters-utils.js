const getSortedProducts = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.discoutPrice - a.discoutPrice);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.discoutPrice - b.discoutPrice);
  }
  return products;
};

const getFilteredProducts = (
  products,
  stockBoolean,
  deliveryBoolean,
  categoryObj
) => {
  return products
    .filter((product) => (stockBoolean ? true : product.inStock))
    .filter((product) => (deliveryBoolean ? product.fastDelivery : true))
    .filter((product) => categoryObj[product.categories]);

  // //men aya
  // if (products.categories === "men") {
  //   return categoryObj.men;
  // } else if (products.categories === "women") {
  //   return categoryObj.women;
  // }

  // true =  filter
};

export { getSortedProducts, getFilteredProducts };
