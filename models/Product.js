const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide the name"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the price"],
  },
  image: {
    type: String,
    required: [true, "You need to select Image"],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
