// try giving right path in require mongoose
//require.paths.unshift("/path/to/mongoose"); // I think mongoose is working because I have npm installed it here.
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/test');

var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);

// var thor = new Movie({
//   title: 'Thor'
// , rating: 'PG-13'
// , releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
// , hasCreditCookie: true
// });
//
// thor.save(function(err, thor) {
//   if (err) return console.error(err);
//   console.dir(thor);
// });

// var thor2 = new Movie({
//   title: 'Thor: The Dark World'
// , rating: 'PG-13'
// , releaseYear: '2013'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
// , hasCreditCookie: true
// });
//
// thor2.save(function(err, thor2) {
//   if (err) return console.error(err);
//   console.dir(thor2);
// });


// Find a single movie by name.
//Movie.findOne({ title: 'Thor' }, function(err, thor) {
//  if (err) return console.error(err);
//  console.dir(thor);
//});

// Find all movies.
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});

// Find all movies that have a credit cookie.
//Movie.find({ hasCreditCookie: true }, function(err, movies) {
//  if (err) return console.error(err);
//  console.dir(movies);
//});

//movieSchema.statics.findAllWithCreditCookies = function(callback) {
//  return this.find({ hasCreditCookie: true }, callback);
//};

// Use the helper as a static function of the compiled Movie model.
//Movie.findAllWithCreditCookies(function(err, movies) {
//  if (err) return console.error(err);
//  console.dir(movies);
//});
