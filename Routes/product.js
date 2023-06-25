const productController = require('../controllers/productController');
const express = require('express');
const router = express.Router();

// Product routes
router.get('/getProducts', productController.getAllProducts);
router.get('/getProductsById', productController.getProductById);
router.post('/createproduct', productController.createProduct);
router.put('/updateProducts', productController.updateProduct);
router.delete('/deleteProducts', productController.deleteProduct);
// router.get('/getProductsByUserId', productController.getProductsByUserId);

module.exports = router;