const router = require('express').Router();
const { list, create } = require('../controllers/productController');

router.get('/', list);
router.post('/', create);

module.exports = router;
