const  Product  = require('../models/product');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  const { id } = req.query;
  try {
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { productName, productQuantity, productPrice } = req.body;
  try {
    const product = await Product.create({
      productName,
      productQuantity,
      productPrice,
      createdAt: new Date(),
    });
    return res
        .status(201)
        .json({ message: 'Product created successfully', product });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id, productName, productQuantity, productPrice } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (product) {
      product.productName = productName;
      product.productQuantity = productQuantity;
      product.productPrice = productPrice;
      await product.save();
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.query;
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};



module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
