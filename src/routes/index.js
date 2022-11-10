const router = require('express').Router();

router.get('/', async (req, res) => {
    return res.redirect('/store')
});

router.use('/category', require('./end_points/category'));
router.use('/product', require('./end_points/product'));

module.exports = router;

