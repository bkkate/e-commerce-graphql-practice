exports.Category = {
  products: ({ id }, args, { products }) => {
    // parent is Category
    // {id} in the argument ===  const {id} = parent     destructuring "id" property from parent
    return products.filter((product) => product.categoryId === id);
  },
};
