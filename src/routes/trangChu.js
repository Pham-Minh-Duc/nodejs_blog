//import file ...Controller

const express = require('express');
const router = express.Router();

const trangchuController = require('../app/controllers/TrangchuController');


// router.use('/trang-chu/:slug', trangchuController.show);
router.use('/', trangchuController.index);

module.exports = router;
