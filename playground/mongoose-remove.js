const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id : '593d7b388ef7d384b3aae672'}).then((todo) => {
  console.log();
});

Todo.findByIdAndRemove('593d7e388ee7d384b3aae762').then((todo) => {
  console.log(todo);
});
