const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db_connect');
const Product = require('./Product');

class Category extends Model { }

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'category',
    tableName: 'category',
    timestamps: false
});

Category.hasMany(Product, {
    foreignKey: 'category'
});
Product.belongsTo(Category, {
    foreignKey: 'category',
    as: 'Category'
})

module.exports = Category;