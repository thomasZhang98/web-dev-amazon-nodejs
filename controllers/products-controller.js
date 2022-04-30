import productsDao from "../database/products/products-dao.js";

const bookmarkProduct = async (req, res) => {
    const product = req.body
    await productsDao.bookmarkProduct(product)
    res.sendStatus(200)
}

const findProductByAsin = async (req, res) => {
    const asin = req.params.asin
    const product = await productsDao.findProductByAsin(asin)
    res.json(product)
}

const findAllProducts = async (req, res) => {
    const products = await productsDao.findAllProducts();
    res.json(products);
}

export default (app) => {
    app.post('/api/bookmarks', bookmarkProduct);
    app.get('/api/products/:asin', findProductByAsin);
    app.get('/api/products', findAllProducts);
}