var morgan = require('morgan'),
    express = require('express'),
    fs = require('fs'),
    path = require('path'),
    http = require('http'),
    https = require('https'),
    mongoose = require('mongoose'),

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

// Express config
var app = express();
app
  .use(morgan('dev'))
  .use(httpsRedirect)
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(__dirname + '/public_html'))
  .use('/auth/local', require('./route/auth.local.js'))
  .use('/api', require('./route/api.js'))
  .use('/', require('./route/default.js'));

var db = mongoose.connection;
db.on('error', function(error) {
  console.log('MongoDB connection error');
  console.log(error);
  process.exit(-1);
});

// HTTPS config
appConfig.credentials.key = fs.readFileSync(appConfig.credentials.keyPath);
appConfig.credentials.cert = fs.readFileSync(appConfig.credentials.certPath);

function httpsRedirect(request, response, next) {
  if (!request.secure) {
    console.log("Insecure request, redirecting ...");
    return response
      .redirect('https://' + request.hostname + ":" + appConfig.securePort + request.url);
  }

  next();
}

secureServer = https.createServer(appConfig.credentials, app)
  .listen(appConfig.securePort);

insecureServer = http.createServer(app)
  .listen(appConfig.port);
