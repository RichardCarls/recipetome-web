module.exports = {

  port: process.env.PORT || 3000,
  sessionConfig: {
    name: 'connect.sid',
    secret: 'ilikenode',
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false,  // TODO: Enable if using SSL
      maxAge: null,   // TODO: Determine appropriate TTL
      //domain: '',   // TODO: Set session cookie domain?
    },
    saveUninitialized: true,
    resave: true,
  },

};
