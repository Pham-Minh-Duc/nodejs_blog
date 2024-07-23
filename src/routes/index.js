//điều hướng đến tất cả trang

const trangChuRouter = require('./trangChu');
const thucDonRouter = require('./thucDon');
const datBanRouter = require('./datBan');

function route(app){

app.use('/trang-chu', trangChuRouter);
app.use('/thuc-don', thucDonRouter);
app.use('/dat-ban', datBanRouter);
    //route
// app.get('/thuc-don', (req, res) => {    //get( , ) doi so 1 la routes, doi so 2 la function handler
//     res.render('thuc-don')
// })
// app.get('/dat-ban', (req,res) => {
//     res.render('dat-ban')
// })
}

module.exports = route;
