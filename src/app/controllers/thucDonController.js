class thucDonController {

    //[GET] /thuc-don
    order(req,res){
        res.render('thuc-don')
    }

    title(req,res){
        // res.send('Đây là thực đơn')
        res.render('thuc-don')

    }
}

module.exports = new thucDonController