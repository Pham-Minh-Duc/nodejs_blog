const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrdersDrink = new Schema({
    id: ObjectId,
    nameOfDrink: String,
    detail: String,
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('orders_drinks', OrdersDrink);

