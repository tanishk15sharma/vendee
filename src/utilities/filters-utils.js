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
  brands,
  rating,
  range
) => {
  console.log(rating);
  return products
    .filter((product) => (stockBoolean ? true : product.inStock))
    .filter((product) => (deliveryBoolean ? product.fastDelivery : true))
    .filter((product) => categoryObj[product.categories])
    .filter((product) => (rating === null ? true : rating < product.ratings))
    .filter((product) => product.discountPrice <= range)
    .filter((product) =>
      brands.length === 0
        ? true
        : brands.find((brand) => brand === product.brand)
    );
};

export { getSortedProducts, getFilteredProducts };
