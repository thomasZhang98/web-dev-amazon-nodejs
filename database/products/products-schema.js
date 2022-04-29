const mongoose = require("mongoose");
const productsSchema = mongoose.Schema(
  {
    productID: String,  // ID for the whole product, get from amazonAPI 'asin' field
    itemID: String, // ID for individual item, generate
    name: String, // this field is 'title' in the amazonAPI
    brand: String,
    image: String,
    price: String,
    rating: Number,
    description: String,
    link: String,
    bookmarks: Number,
  },
  { collection: "products" }
);
module.exports = productsSchema;
