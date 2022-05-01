import productsModel from "./products-model.js";
import buyersModel from "../buyers/buyers-model.js";

const bookmarkProduct = async (product, buyer_id) => {
    const existingProduct = await productsModel.findOne({asin: product.asin})
    if (existingProduct) {
        // update
        await productsModel.updateOne({asin: product.asin}, {
            $set: {bookmarks: existingProduct.bookmarks + 1}
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
            bookmarks: 1
        })
    }
    // Insert product asin to buyer's bookmarks
    await buyersModel.updateOne({_id: buyer_id}, {
        $push: {bookmarks: product.asin}
    })
}

const unbookmarkProduct = async (product, buyer_id) => {
    try {
        const existingProduct = await productsModel.findOne({asin: product.asin})
        await productsModel.updateOne({asin: product.asin}, {
            $set: {bookmarks: existingProduct.bookmarks - 1}
        })
        await buyersModel.updateOne({_id: buyer_id}, {
            $pull: {bookmarks: product.asin}
        })
    } catch (e) {
        alert('Product not found!')
    }
}

const findProductByAsin = async asin => await productsModel.findOne({asin: asin});
const findAllProducts = async () => await productsModel.find();

export default {
    bookmarkProduct,
    unbookmarkProduct,
    findProductByAsin,
    findAllProducts
}