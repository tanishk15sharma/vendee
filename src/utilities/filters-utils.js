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
  // let brandFilter = Object.values(brandsObj).forEach((val) =>
  //   val ? console.log("true hai") : console.log("false hai") toh products return kardoo simple
  // );

  return products
    .filter((product) => (stockBoolean ? true : product.inStock))
    .filter((product) => (deliveryBoolean ? product.fastDelivery : true))
    .filter((product) => categoryObj[product.categories]);

  // if (products.brands === "hrx") {
  //   return brandsObj.hrx;
  // }
  // //men aya
  // if (products.categories === "men") {
  //   return categoryObj.men;
  // } else if (products.categories === "women") {
  //   return categoryObj.women;
  // }

  // true =  filter
};
const getBrandedProducts = (products, brandName) => {};
export { getSortedProducts, getFilteredProducts, getBrandedProducts };
