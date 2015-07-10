var morgan = require('morgan'),
    express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),

    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    flash = require('connect-flash'),

    appConfig = require('./config/app.config.js'),
    dbConfig = require('./config/mongoose.config.js');


// App config
var app = express();

// Express config
app
  .use(morgan('dev'))
  .use(cookieParser())
  .use(bodyParser.json())
  .use(session(appConfig.sessionConfig))
  .use(passport.initialize())
  .use(passport.session())
  .use(flash())
  .use(express.static(__dirname + '/public_html'));

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
// TODO: Passport routes and provider config

// Server routes
require('./routes.js')(app, passport);

app.listen(appConfig.port);
console.log('Server listening on port ' + appConfig.port);
