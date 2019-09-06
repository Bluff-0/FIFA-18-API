// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Fifa', (err, client)=>{
  if(err){
    return console.log(`Unable to connect to MongoDB server`);
  }
  console.log('Connected to MongoDB Server');
 // const db= client.db('TodoApp');
 // db.collection('Todos').find({
 //   _id: new ObjectID('5d0f1877975580b766061603')
 // }).toArray().then((docs)=> {
 //   console.log('Todos');
 //   console.log(JSON.stringify(docs, undefined, 2));
 // },(err)=>{
 //   console.log('Unable to fetch Todos', err);
 // });

 const db= client.db('Fifa');
 db.collection('f18').find().count().then((count)=> {
   console.log(`Player count: ${count}`);
   console.log(JSON.stringify(docs, undefined, 2));
 },(err)=>{
   console.log('Unable to fetch Todos', err);
 });

 // db.close();
});
