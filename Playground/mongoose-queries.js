const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');
// const {User} = require('./../server/models/user');
var {F18} = require('./../server/models/f18.js');

//This one is sample Todo ID
// var id= '5d6b6e2e85ce01cc0d4aa470';
var id=1;
// Todo Collection ID
// This one is sample User ID
// var id= '5d32b825e2eef73c05b1640b';
// if (!ObjectId.isValid(id)) {
//   console.log('ID not Valid');
// }

F18.findById(id).then((player)=> {
  console.log(player);
});

// Todo.findOne({
//   _id: id
// }).then((todo)=> {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo)=> {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e)=> console.log(e));
//
//
// User.findById(id).then((user)=> {
//   if(!user) {
//     return console.log('Unable to find User');
//   }
//   console.log(JSON.stringify(user, undefined, 2));
// }, (e)=> {
//   console.log(e);
// });
