const Product = require("../models/product");
// const User = require("../models/user")

const addProduct = (req, res) => {
  const product = req.body;
  const { name, imageURI, description, reviews, price, actualPrice, isAvailible = true } = product;

  // const newProduct = new Product(product);      
  // newProduct.save();
  Product.insertMany([product]).then(result => {
    res.json(result)
  })

};


const allProducts = (req, res) => {
  Product.find({}).then(product => {
    res.json(product)
  })
}

const deleteProducts = (req, res) => {
  const filter = req.body;

  Product.remove(filter).then(result => {
    res.send(result)
  })
}

module.exports = {
  addProduct,
  allProducts,
  deleteProducts
};