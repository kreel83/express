var express = require('express');
var router = express.Router();
var user_controller = require('../controller/userController.js');
var scraping_controller = require('../controller/scrapingController');
/* GET home page. */
console.log('coucou')


router.get('/', user_controller.index)
router.get('/scraping', scraping_controller.test)
router.get('/ajax/scraping/:search', scraping_controller.scrapping)
router.get('/livre/:id', scraping_controller.pageLivre)



module.exports = router;
