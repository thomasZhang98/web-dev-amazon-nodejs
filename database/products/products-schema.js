const mongoose = require("mongoose");
const productsSchema = mongoose.Schema(
  {
    pid: String,
    title: String,
    brand: String,
    image: String,
    price: String,
    rating: Number,
    description: String,
    link: String,
  },
  { collection: "products" }
);
module.exports = productsSchema;
