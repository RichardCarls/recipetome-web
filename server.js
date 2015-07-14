var morgan = require('morgan'),
    express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),

    bodyParser = require('body-parser'),

    appConfig = require('./config/app.js'),
    dbConfig = require('./config/mongoose.js');


// Mongoose config
mongoose.connect(dbConfig.url, dbConfig.options, function(error) {
  if (!error) { return; }

  console.log('Error connecting to MongoDB');
  console.log(error);
  process.exit(-1);
});

var db = mongoose.connection;
db.on('error', function(error) {
  console.log('MongoDB connection error');
  console.log(error);
  process.exit(-1);
});

// Passport config
//

// Express config
var app = express();
app
  .use(morgan('dev'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())
  .use(passport.session())
  .use(express.static(__dirname + '/public_html'))
  .use('/auth/local', require('./route/auth.local.js'))
  .use('/api', require('./route/api.js'))
  .use('/', require('./route/default.js'));

app.listen(appConfig.port);
console.log('Server listening on port ' + appConfig.port);
