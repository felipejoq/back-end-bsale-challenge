const Product = require('../database/models/Product');
const { Op } = require('sequelize');
const { response } = require('express');

const getPagination = (page, size) => {
    const limit = Number(size) && Number(size) > 0 ? +Number(size) : 6;
    const offset = Number(page) && Number(page) > 0 ? Number(page) * limit : 0;

    return { limit, offset };

};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: products } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.floor(totalItems / limit);

    return { totalItems, products, totalPages, currentPage };

}

exports.findAll = async (req, res) => {
    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);

    const products = await Product.findAndCountAll({
        include: 'Category',
        limit,
        offset
    });

    const response = getPagingData(products, page, limit);

    res.status(200).json(response);

}

exports.findAllByNameSearch = async (req, res) => {
    const { page, size, term } = req.query;

    const { limit, offset } = getPagination(page, size);

    const search_term = term ? { name: {[Op.like]: '%'+req.query.term.toLowerCase()+'%'}}: ''

    const data = await Product.findAndCountAll({
        where: search_term, limit, offset
    });

    const response = getPagingData(data, page, limit)

    return res.status(200).json({
        result: response
    });

}