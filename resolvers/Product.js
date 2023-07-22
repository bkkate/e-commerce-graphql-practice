exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    // parent is Product
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
  // same thing as:
  //   category: (parent, args, context) => {
  //     // parent is Product
  //     const categoryId = parent.categoryId;
  //     return categories.find((category) => category.id === categoryId);
  //   },
};
