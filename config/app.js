module.exports = {

  host: (process.env.NODE_ENV === 'development' ? 'localhost' : 'recipeto.me' ),
  port: process.env.PORT || 3000,
  secret: 'ilikenode',        // TODO: Use better secret and hide from public!
};
