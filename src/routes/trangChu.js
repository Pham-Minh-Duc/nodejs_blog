const express = require('express');
const router = express.Router();

const trangchuController = require('../app/controllers/TrangchuController')

router.use('/trang-chu/:slug', trangchuController.show);
router.use('/trang-chu', trangchuController.index);

module.exports = router;