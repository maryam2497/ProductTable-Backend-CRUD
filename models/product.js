// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconnection');

const Product = sequelize.define('Product', {
  productName: DataTypes.STRING,
    productQuantity: DataTypes.INTEGER,
    productPrice: DataTypes.FLOAT
}, {
  tableName: 'Products', 
  timestamps: false, 
});

module.exports = Product;
