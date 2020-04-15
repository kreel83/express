var express = require('express');
var router = express.Router();
var scraping_controller = require('../controller/scrapingController');
/* GET home page. */

console.log('scrop !')
router.get('/scraping/:page', scraping_controller.test)


module.exports = router;