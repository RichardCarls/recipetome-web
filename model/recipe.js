var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs');

var ObjectId = mongoose.Schema.ObjectId;
var RecipeIngredient = mongoose.Schema({
  order: { type: Number, required: true, min: 1, },  //Required
  qty: { type: Number, min: 0.1, },
  measure: { type: String, trim: true, },
  name: { type: String, required: true, trim: true, },  //Required
  preparation: { type: String, trim: true, },
});
var RecipeStep = mongoose.Schema({
  order: { type: Number, required: true, min: 1, },  //Required
  summary: { type: String, trim: true, },
  directions: { type: String, required: true, trim: true, },  //Required
});

var schema = mongoose.Schema({
  user_id: { type: ObjectId, ref: 'User', required: true, },
  title: { type: String, required: true, trim: true, },  //Required
  description: { type: String, trim: true, },
  thumbnail: { type: String, trim: true, },
  rating: { type: Number, min: 0, max: 5, },
  prep_time: { type: Number, min: 1, },
  cook_time: { type: Number, min: 1, },
  created_on: { type: Date, },
  updated_on: { type: Date, },
  category: { type: String, required: true, trim: true, default: 'none' },  //Required
  ingredients: [RecipeIngredient],
  steps: [RecipeStep],
});

schema.pre('save', function(next) {
  var now = new Date();

  this.updated_on = now;
  if (!this.created_on) {
    this.created_on = now;
  }

  next();
});

module.exports = mongoose.model('Recipe', schema);
