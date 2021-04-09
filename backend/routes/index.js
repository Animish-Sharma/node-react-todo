var express = require('express');
var router = express.Router();
const {
  todoIndex,
  todoDetail,
  todoCreate,
  todoUpdate,
  todoDelete,
} = require('../controllers/TodoController');

/* GET home page. */
router.get('/todos', todoIndex);
router.get('/todo/:id',todoDetail);
router.post('/todos',todoCreate);
router.put("/:id",todoUpdate);
router.delete("/:id",todoDelete);

module.exports = router;
