var controller = require('./controller.js');
var router = require('express').Router();


router
  .route('/todos')
  .get(controller.get)
  .post(controller.post)

router
  .route('/todos/:id')
  .put(controller.update)
  .delete(controller.delete)

module.exports = router