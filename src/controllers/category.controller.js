const Category = require('../database/models/Category');
const Product = require('../database/models/Product');

exports.findAll = async (req, res) => {
    const categories = await Category.findAll();
    return res.status(200).json(categories)
}

exports.findAllWithProducts = async (req, res) => {
    const categories = await Category.findAll({
        include: Product
    })
    return res.status(200).json(categories)
}