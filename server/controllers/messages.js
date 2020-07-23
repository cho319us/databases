var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('testing');
    models.messages.getAll((err, results) => {
      if (err) {
        res.writeHead('404');
        console.log('here is controller messages.js with error');
        res.end(err);
      } else {
        console.log('here is controller success messages.js');
        res.writeHead(201);
        res.end(JSON.stringify(results));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('this is request', req);
    console.log('what type?', typeof (req));
    // var queryArg = [,,];
    // models.create(queryArg, (err, results) => {

    // });
    res.end();
  } // a function which handles posting a message to the database
};

