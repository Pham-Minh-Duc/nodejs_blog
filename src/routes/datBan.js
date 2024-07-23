//  import file datBanController

const express = require('express');
const router = express.Router();

const datBanController = require('../app/controllers/datBanController');

router.use('/dat-ban/:slug', datBanController.title);
router.use('/', datBanController.reserve);

module.exports = router;
