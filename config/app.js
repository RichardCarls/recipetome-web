module.exports = {
  host: (process.env.NODE_ENV === 'development' ? 'localhost' : 'recipeto.me' ),
  port: (process.env.NODE_ENV === 'development' ? 3000 : 80),
  securePort: (process.env.NODE_ENV === 'development' ? 3443 : 443),
  secret: 'ilikenode',        // TODO: Use better secret and hide from public!
  credentials: {
    key: './cert/recipetome-key.pem',
    cert: './cert/' + (process.env.NODE_ENV === 'development' ? 'recipetome-local.crt' : 'recipetome-bundle.crt'),
  },
};
