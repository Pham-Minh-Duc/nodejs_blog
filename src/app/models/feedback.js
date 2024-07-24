// const { create } = require("express-handlebars");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Feedback = new Schema({
    id: ObjectId,
    name: {type: String, default: 'none'},
    feedBack: String,
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now}
});

module.exports = mongoose.model('feedbacks', Feedback)