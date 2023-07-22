exports.Query = {
  hello: () => {
    return ["World!"];
  },

  products: (parent, args, { products }) => {
    return products;
  },

  product: (parent, { id }, { products }) => {
    const productId = args.id;
    return products.find((product) => product.id === productId);
  },

  categories: () => categories,

  category: (parent, args, { categories }) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
