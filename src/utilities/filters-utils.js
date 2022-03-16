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
  categoryObj,
  brands
) => {
  // let brandFilter = Object.values(brandsObj).forEach((val) =>
  //   val ? console.log("true hai") : console.log("false hai") toh products return kardoo simple
  // );

  return products
    .filter((product) => (stockBoolean ? true : product.inStock))
    .filter((product) => (deliveryBoolean ? product.fastDelivery : true))
    .filter((product) => categoryObj[product.categories])
    .filter((product) =>
      brands.length === 0
        ? true
        : brands.find((brand) => brand === product.brand)
    );

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
// const getBrandedProducts = (products, brands) => {
// if (brands.length === 0) {
//   return products;
// }
// brands.length === 0 ? true : products.filter
//   return products.filter((product) =>
//     brands.length === 0 ? true : brands.find((brand) => brand === product.brand)
//   );
// };

export { getSortedProducts, getFilteredProducts };
//true matlub product milaga
