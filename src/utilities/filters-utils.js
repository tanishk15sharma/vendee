const getSortedProducts = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.discoutPrice - a.discoutPrice);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.discoutPrice - b.discoutPrice);
  }
  return products;
};

export { getSortedProducts };
