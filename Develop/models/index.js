// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Establish table relationships between product and tag
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' })
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' })

// Export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
