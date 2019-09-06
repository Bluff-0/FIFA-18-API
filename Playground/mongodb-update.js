// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Fifa', (err, client)=>{
  if(err){
    return console.log(`Unable to connect to MongoDB server`);
  }
  console.log('Connected to MongoDB Server');
 const db= client.db('Fifa');
 // db.collection('Todos').findOneAndUpdate({
 //   _id: new ObjectID('5d31dfcb4e612a36c8a8efcf')
 // },{
 //   $set: {
 //     completed: true
 //   }
 // }, {
 //   returnOriginal: false
 // }).then((result) => {
 //   console.log(result);
 // });
 db.collection('f18').findOneAndUpdate({
   _id: 17980
 },{
   $set: {
     Special:1031
   },
   $inc: {
     Age: 1
   }
 }, {
   returnOriginal: false
 }).then((result) => {
   console.log(result);
 });
 db.close();
});
