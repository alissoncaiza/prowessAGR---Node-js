import Products from "../models/productModel.js";
import multer from "multer";
import multerConfig from "../utils/multerConfig.js";

const upload = multer(multerConfig).single("image");

export const fileUpload = async (req, res, next) => {
  upload(req, res, async (error) => {
    if (error) {
      res.json({ message: error });
    }
    return next();
  });
};

//CREATE PRODUCT
export const postProduct = async (req, res) => {
  const newProduct = new Products(req.body);
  try {
    if (req.file && req.file.filename) {
      newProduct.image = req.file.filename;
    }
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET PRODUCT BY ID
export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET PRODUCT BY SLUG
export const getProductBySlug = async (req, res) => {
  try {
    const product = await Products.findOne({ slug: req.params.slug });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    let newProduct = req.body;
    if (req.file && req.file.filename) {
      newProduct.image = req.file.filename;
    } else {
      const product = await Products.findById(req.params.id);
      newProduct.image = product.image;
    }
    await Products.findOneAndUpdate({ _id: req.params.id }, newProduct, {
      new: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product) {
      await product.remove();
      res.status(200).json({ message: "Product deleted" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
