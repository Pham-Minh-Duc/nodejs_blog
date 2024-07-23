class datBanController {

    //[GET] /dat-ban
    reserve(req, res){
        res.render('dat-ban')
    }

    title(req, res){
        res.send('Đây là trang đặt bàn')
    }
}

module.exports = new datBanController;