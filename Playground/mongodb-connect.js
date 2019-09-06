// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

// Object Destructuring ES6
// var user= {name: 'Saptarshi', age: 19};
// var {name}= user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/Fifa', (err, client)=>{
  if(err){
    return console.log(`Unable to connect to MongoDB server`);
  }
  console.log('Connected to MongoDB Server');
 const db= client.db('Fifa');
 // db.collection('Todos').insertOne({
 //   text: 'Something to Do',
 //   completed: false
 // }, (err, result)=> {
 //   if(err){
 //     return console.log('Unable to Insert', err);
 //   }
 //   console.log(JSON.stringify(result.ops, undefined, 2));
 // });
// db.collection('Users').insertOne({
//   name: 'Saptarshi',
//   Age: 19,
//   location: 'Kolkata'
// }, (err,result)=> {
//   if (err) {
//     return console.log('Unable to insert', err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });
  db.close();
});
