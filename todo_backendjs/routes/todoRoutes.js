const {Router} = require ('express');
const { insertTodo, getTodos, getOneTodo, updateTodo, deleteTodo, markAsDone } = require('../controller/todoController');

const router = Router();

router.post('', insertTodo)
router.get('/', getTodos)
router.get('/:id', getOneTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)
router.put('/complete/:id', markAsDone)

module.exports = {router}; 