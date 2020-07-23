var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        res.writeHead(404);
        res.end(err);
      } else {
        res.writeHead(201);
        res.end(JSON.stringify(results));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var queryArg = [req.body.text, req.body.username, req.body.chatroom];
    console.log(queryArg);
    models.messages.create(queryArg, (err, results) => {
      if (err) {
        res.writeHead(404);
        res.end(err);
      } else {
        res.writeHead(201);
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};

