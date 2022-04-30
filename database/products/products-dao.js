import productsModel from "./products-model.js";

const bookmarkProduct = async (product) => {
    const existingProduct = await productsModel.findOne({asin: product.asin})
    if (existingProduct) {
        // update
        await productsModel.updateOne({asin: product.asin}, {
            $push: {bookmarks: 'test_buyerId3'}
        })
    } else {
        // insert
        await productsModel.create({
            asin: product.asin,
            title: product.title,
            brand: product.brand,
            image: product.image,
            price: product.price,
            feature_bullets: product.feature_bullets,
            link: product.link,
            rating: 0,
            bookmarks: ['test_buyerId'],
            comments: []
        })
    }
}

const findProductByAsin = async asin => await productsModel.findOne({asin: asin});
const findAllProducts = async () => await productsModel.find();

export default {
    bookmarkProduct,
    findProductByAsin,
    findAllProducts
}