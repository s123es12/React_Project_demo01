var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reactRoj_demo', {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('connected', function() {
  console.log("Mongodb is connected !");
});

module.exports=db;