const Maindish = require('../models/mainDish');
const Breakfast = require('../models/breakfast');
const Drink = require('../models/drink');

const { mutipleMongooseToObject } = require('../../ultil/mongoose');

class thucDonController {

    

    //[GET] /thuc-don
    orders(req, res, next){
        Promise.all([
            Breakfast.find({}),
            Maindish.find({}),
            Drink.find({})

        ])
        .then(([ordersBreakfast, ordersMaindish, orderDrink]) => {
            res.render('thuc-don',{ 
                ordersBreakfast: mutipleMongooseToObject(ordersBreakfast), 
                ordersMaindish: mutipleMongooseToObject(ordersMaindish),
                orderDrink: mutipleMongooseToObject(orderDrink)
            });
        })
        .catch(next);
    }
    



    orderSum(req,res){
        // res.send('Đây là thực đơn + ' + req.params.slug)
        res.render('dat-hang');

    }
}

module.exports = new thucDonController