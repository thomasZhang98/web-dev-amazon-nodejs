import ordersModel from './orders-model.js';
import productsModel from '../products/products-model.js';

const findOrder = async (oid) => await ordersModel.find({_id: oid});
const findByBuyerId = async (buyerId) => await ordersModel.find({buyerId: buyerId});
const createOrder = async (order) => await ordersModel.create(order);
const updateOrder = async (oid, order) => await ordersModel.updateOne({_id: oid}, {$set: order});
const deleteOrder = async (oid) => await ordersModel.deleteOne({_id: oid});


const makeOrder = async (product, buyer_id) => {
  const existingProduct = await productsModel.findOne({asin: product.asin})
  if (existingProduct) {    
      // update
      await ordersModel.create({
        buyerId: buyer_id,
        shippingAddress: 'Home',
        orderTime: Date(),
        productId: product.asin,
        productName: product.title,
        productBrand: product.brand,
        productImage: product.image,
        price: product.price,      
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
          bookmarks: 0
      })

      await ordersModel.create({
        buyerId: buyer_id,
        shippingAddress: 'Home',
        orderTime: Date(),
        productId: product.asin,
        productName: product.title,
        productBrand: product.brand,
        productImage: product.image,
        price: product.price,      
      })
  }
}


export default {
    findOrder,
    findByBuyerId,
    createOrder,
    updateOrder,
    deleteOrder,
    makeOrder
}