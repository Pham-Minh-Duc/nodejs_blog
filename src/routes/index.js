const newsRouter = require('./trangChu');

function route(app){

app.get('/trang-chu', newsRouter);
    //route
app.get('/thuc-don', (req, res) => {    //get( , ) doi so 1 la routes, doi so 2 la function handler
    res.render('thuc-don')
})

app.get('/dat-ban', (req,res) => {
    res.render('dat-ban')
})
}

module.exports = route;