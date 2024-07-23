class TrangchuController {

    //[GET] /news
    index(req, res){
        res.render('trang-chu')
    }


    //[GET] /news/:slug
    show(req, res) {
        res.send('News details')
    }
}

module.exports = new TrangchuController;