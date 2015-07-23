var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var schema = mongoose.Schema({
  email: { type: String, required: true, trim: true, unique: true, },   //Required
  email_verified: { type: Boolean, default: false, },
  password: { type: String, },
});

schema.methods.generateHash = function(password) {
  return bcrypt
    .hashSync(password, bcrypt.genSaltSync(8), null);
};

schema.methods.validPassword = function(password) {
  return bcrypt
    .compareSync(password, this.password);
};

schema.methods.toJSON = function() {
  var json = this.toObject();
  delete json.password;  // Remove password field

  return json;
};

module.exports = mongoose.model('User', schema);
