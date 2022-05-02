import productsDao from "../database/products/products-dao.js";

const bookmarkProduct = async (req, res) => {
    const product = req.body
    const buyer_id = req.session['currentUser']._id
    await productsDao.bookmarkProduct(product, buyer_id)
    res.sendStatus(200)
}

const unbookmarkProduct = async (req, res) => {
    const product = req.body
    const buyer_id = req.session['currentUser']._id
    await productsDao.unbookmarkProduct(product, buyer_id)
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

const addComment = async (req, res) => {
    const { buyer_id, product_id, comment } =  req.params;
    const product = await productsDao.addComment(product_id. buyer_id, comment)
    res.json(product)
}

export default (app) => {
    app.post('/api/bookmarks', bookmarkProduct);
    app.post('/api/unbookmarks', unbookmarkProduct);
    app.get('/api/products/:asin', findProductByAsin);
    app.get('/api/products', findAllProducts);
    app.get('api/product/addComment', addComment)
}