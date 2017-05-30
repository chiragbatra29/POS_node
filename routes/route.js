var express = require('express');
var router = express.Router();
module.exports = router;

var itemController = require('../controllers/items');

router.route('/app/POS')
  .post(itemController.postItem);

router.route('/app/getItems/:category')
  .get(itemController.getItems)

router.route('/app/postCategory')
    .post(itemController.postCategory);

router.route('/app/getCategory')
  .get(itemController.getCategory);
