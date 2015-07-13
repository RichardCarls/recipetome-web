module.exports = {

  host: 'http://localhost',   // TODO: set host dynamically with process.env?
  port: process.env.PORT || 3000,
  secret: 'ilikenode',        // TODO: Use better secret and hide from public!

};
