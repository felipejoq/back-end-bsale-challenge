const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db_connect');
const Category = require('./Category');

class Product extends Model { }
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    url_image: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    discount: {
        type: DataTypes.INTEGER,
    },
    category: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: 'product',
    tableName: 'product',
    timestamps: false
});



module.exports = Product;