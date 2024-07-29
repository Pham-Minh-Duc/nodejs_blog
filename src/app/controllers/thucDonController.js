const Maindish = require('../models/mainDish');
const Breakfast = require('../models/breakfast');

const { mutipleMongooseToObject } = require('../../ultil/mongoose');

class thucDonController {

    

    //[GET] /thuc-don
    orders(req, res, next){
        Promise.all([
            Breakfast.find({}),
            Maindish.find({})
        ])
        .then(([ordersBreakfast, ordersMaindish]) => {
            res.render('thuc-don',{ 
                ordersBreakfast: mutipleMongooseToObject(ordersBreakfast), 
                ordersMaindish: mutipleMongooseToObject(ordersMaindish)
            });
        })
        .catch(next);
    }
    



    title(req,res){
        // res.send('Đây là thực đơn')
        res.render('thuc-don');

    }
}

module.exports = new thucDonController