var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  firstname: {
    type: String,
    default:'',
  },
  lastname: {
    type:String,
    deafult:'',
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

User.plugin(passportLocalMongoose); //add's support for Username and password @ AuthenticationS

module.exports = mongoose.model('User', User);
