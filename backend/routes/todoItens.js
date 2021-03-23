const router = require('express').Router();
let TodoItem = require('../models/todoItem.model');

router.route('/').get((req, res) => {
  TodoItem.find()
    .then(todoItens => res.json(todoItens))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newTodoItem = new TodoItem({
    description,
    date,
  });

  newTodoItem.save()
  .then(() => res.json('TodoItem added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  TodoItem.findById(req.params.id)
    .then(todoItens => res.json(todoItens))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  TodoItem.findByIdAndDelete(req.params.id)
    .then(() => res.json('TodoItem deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  TodoItem.findById(req.params.id)
    .then(todoItens => {
      todoItens.description = req.body.description;
      todoItens.date = Date.parse(req.body.date);

      todoItens.save()
        .then(() => res.json('TodoItem updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;