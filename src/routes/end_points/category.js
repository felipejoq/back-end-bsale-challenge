const router = require('express').Router();
const categories = require('../../controllers/category.controller');


router.get('/', categories.findAll);

router.get('/products', categories.findAllWithProducts);

module.exports = router;
