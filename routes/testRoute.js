const express = require('express');
const  testFunction  = require('../controllers/testController');

const router = express.Router();

router.route('/test').get(testFunction);

module.exports = router;
