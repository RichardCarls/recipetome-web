module.exports = {

  host: (process.env.NODE_ENV === 'development' ? 'localhost' : 'recipeto.me' ),
  port: (process.env.NODE_ENV === 'development' ? process.env.PORT : 80),
  secret: 'ilikenode',        // TODO: Use better secret and hide from public!
};
