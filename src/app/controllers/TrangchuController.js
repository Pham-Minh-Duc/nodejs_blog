
class TrangchuController {

    //[GET] data in mongodb /trang-chu

    // cách 1
    //    async index(req, res){
    //     try{
    //         const feedbacks = await feedback.find({})
    //         // res.json(feedbacks);
    //         // feedback => res.render('trang-chu')
    //         res.render('trang-chu')
    //     }
    //     catch(error){
    //         console.error("Error fetching feedbacks:", error);
    //         res.status(400).json({ error: 'ERROR', details: error.message });
    //     }
    //         // res.render('trang-chu')
    //     }
    


//cách 2    bugging no longer...
// index(req, res) {
//     feedback.find({}, function (err, feedbacks){
//         if (!err){
//             res.json(feedbacks);
//         }
//         else{
//             res.status(400).json({ error: 'ERROR!!!' });
//         }
//     });
// }


//cách 3
index(req, res) {
    res.render('trang-chu')
}



    //[GET] /trang-chu/:slug
    title(req, res) {
        res.send('Đây là trang chủ')
    }
}

module.exports = new TrangchuController();
