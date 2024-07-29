
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrdersMainDish = new Schema({
    id: ObjectId,
    nameOfDish: {type: String, default: 'none'},
    detail: String,
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model('orders_maindishes',OrdersMainDish)
