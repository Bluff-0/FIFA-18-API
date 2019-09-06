var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {F18} = require('./models/f18');

var app = express();
const port= process.env.PORT || 3000;

app.use(bodyParser.json());


// GET /todos/
// Postman Series
app.get('/f18/:id', (req, res)=> {
  var id= req.params.id;
  // Validate id: isValid()
  if (id<0 || id>17980) {
    // console.log('ID not Valid');
    res.status(404).send({error: 'ID not Found'});
  }
    // 404- send back empty string [not 400]
  // findById
  F18.findById(id).then((player)=> {
    // success
      // if no Todo- send back 404 with empty body
      if(!player) {
        res.status(400).send();
      }
      // if todo- send it back
      res.status(200).send({player});
      },(e)=>{
        // error
          // 400 - send empty body back
        res.status(400).send();
  });


  /* res.send(req.params);
   * This method will enable us to view the parameters we passed
   * req.params: URL parameters like values, ID etc.
   */
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
