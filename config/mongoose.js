const mongoose = require('mongoose');

// coonecting mongoose object
mongoose.connect('mongodb://localhost/restAPI123');

const db = mongoose.connection;

db.on('error',function(err) { 
  console.error(err);
});

db.once('open',function(){
    console.log('Connected to database')
})


module.exports = db;
