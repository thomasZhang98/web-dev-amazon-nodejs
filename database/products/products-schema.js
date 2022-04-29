import mongoose from "mongoose";
const productsSchema = mongoose.Schema(
  {
    // data from external API
    asin: {type: String, unique: true},  // ID for the whole product, get from amazonAPI 'asin' field
    title: String, // this field is 'title' in the amazonAPI
    brand: String,
    image: String,
    price: String,
    feature_bullets: [String],
    link: String,
    // locally created data
    rating: {type: Number, default: 0},
    bookmarks: [String],
    comments: [{
        buyerID: String,
        comment: String,
        rating: Number
    }]
  },
  { collection: "products" }
);

export default productsSchema;
