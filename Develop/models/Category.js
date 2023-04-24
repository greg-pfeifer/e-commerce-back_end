const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Product = require('./Product.js')

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  category_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: 'category'
});

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = Category;
