const express = require('express');
const { addProduct, allProducts, deleteProducts } = require('../controllers/product');

const router = express.Router();

router.post('/add', addProduct);
router.get('/all', allProducts);
router.delete('/delete', deleteProducts)

module.exports = router;