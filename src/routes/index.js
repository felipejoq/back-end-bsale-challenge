const router = require('express').Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        ok: true
    });
});

router.use('/category', require('./end_points/category'));
router.use('/product', require('./end_points/product'));

module.exports = router;

