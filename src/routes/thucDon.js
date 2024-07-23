// import file ...Controller

const express = require('express');
const router = express.Router();

const thucDonController = require('../app/controllers/thucDonController');

router.use('/thuc-don/:slug', thucDonController.title);// thucDonController.show là hàm middleware
router.use('/', thucDonController.order);

module.exports = router;