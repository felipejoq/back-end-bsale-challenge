const router = require('express').Router();
const products = require('../../controllers/product.controller');

router.get('/', products.findAll);
router.get('/search', products.findAllByNameSearch);

module.exports = router;
