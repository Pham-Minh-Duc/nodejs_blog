class TrangchuController {

    //[GET] /trang-chu
    index(req, res){
        res.render('trang-chu')
    }


    //[GET] /trang-chu/:slug
    title(req, res) {
        res.send('Đây là trang chủ')
    }
}

module.exports = new TrangchuController;
