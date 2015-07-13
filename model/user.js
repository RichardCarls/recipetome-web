var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  email: String,
  email_verified: { type: Boolean, default: false },
  password: String,

  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },

});

userSchema.methods.generateHash = function(password) {
  return bcrypt
    .hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt
    .compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
