const path = require('path')
const morgan = require('morgan')
const sass = require('node-sass')
const { engine } = require('express-handlebars')
const express = require('express')  // đi vào thư mục node module để tải
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public'))) //kích hoạt middleware để phục vụ các tệp tĩnh từ thư mục public trong express.

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({  // đổi tên .file cho ngắn gọn
    extname: '.hbs'
}))
app.set('view engine', 'hbs')   // dat cho ung dung express nay su dung view engine la handlebars
app.set('views', path.join(__dirname,'resourses\\views'))   // tim toi thu muc views
// console.log('PATH: ', path.join(__dirname,'resourses\\views'))
// local host --- hosting
// action --> Dispatcher --> Function handler
//route
// app.get('/trang-chu', (req, res) => {   // 2 phan, path va handle function
//     res.render('trang-chu') // tuong tac voi view, render ra trnag-chu
// })

// routes init
route(app);



// 127.0.0.1    localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






