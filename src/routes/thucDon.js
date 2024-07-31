// import file ...Controller

const express = require('express');
const router = express.Router();

const thucDonController = require('../app/controllers/thucDonController');

router.use('/dat-hang',thucDonController.orderSum);
router.use('/', thucDonController.orders);


module.exports = router;