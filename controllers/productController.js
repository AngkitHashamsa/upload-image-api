const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const path = require("path");

// const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  const product = await Product.create({
    name,
    price,
    image: result.secure_url,
  });
  res.status(StatusCodes.CREATED).json({ msg: "Added successfully", product });
};

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ msg: "Added successfully", products });
};

module.exports = {
  createProduct,
  getAllProduct,
};
