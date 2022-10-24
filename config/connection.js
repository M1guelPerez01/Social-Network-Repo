const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-net-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
