
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reactRoj_demo', {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('connected', function() {
  console.log("Mongodb is connected !");
});


var userScheme = new mongoose.Schema({
  username:{type:String,required:true},
  password:{type:String,required:true},
  type:String,

});
const UserModel = mongoose.model("users",userScheme);


exports.UserModel = UserModel;