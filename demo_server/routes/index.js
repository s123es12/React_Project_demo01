var express = require('express');
var router = express.Router();

const {UserModel} = require('../Mongoose/Model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// handle Login request
router.post('/register', function(req, res, next) {
  const {username,password} = req.body;
  const data ={username,password};
  UserModel.findOne({username},function(err,user){
    if(user){
      res.send({code:1,msg:"用戶已存在!"})
    }else{
      const registerUser = new UserModel(data).save();
      res.send({code:0,data:registerUser});
    }
  })

  

});

module.exports = router;
