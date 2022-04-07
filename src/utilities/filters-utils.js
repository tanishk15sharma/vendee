const getSortedProducts = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.discountPrice - a.discountPrice);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.discountPrice - b.discountPrice);
  }
  return products;
};

const getFilteredProducts = (
  products,
  stockBoolean,
  deliveryBoolean,
  categories,
  brands,
  rating,
  range,
  search
) => {
  return (
    products
      .filter((product) => (stockBoolean ? true : product.inStock))
      .filter((product) => (deliveryBoolean ? product.fastDelivery : true))
      // .filter((product) => categoryObj[product.categories])
      .filter((product) => (rating === null ? true : rating < product.ratings))
      .filter((product) => product.discountPrice <= range)
      .filter((product) =>
        brands.length === 0
          ? true
          : brands.find((brand) => brand === product.brand)
      )
      .filter((product) =>
        categories.length === 0
          ? true
          : categories.find((category) => category === product.category)
      )
      .filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.brand.toLowerCase().includes(search.toLowerCase())
      )
  );
};

export { getSortedProducts, getFilteredProducts };
