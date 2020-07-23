var dbConnection = require('../db');

module.exports = {
  getAll: function (callback) {
    // define queryString
    var queryString = 'select users.username, messages.roomname, messages.messagetext, messages.id from users, messages where users.id = messages.userid';
    // use db.query to read the db to obtain the messeages
    dbConnection.query(queryString, (err, results) => {
      if (err) {
        console.log('here is model meesage err');
        callback(err);
      } else {
        console.log('here is model message success');
        callback(null, results);
      }
    });
  }, // a function which produces all the messages
  create: function (queryArg, callback) {
    // define queryString
    var queryString = 'insert into messages(messagetext, userid, roomname) values (?, (select id from users where username = ?), ?)';
    //" + '.$messeagetext' + "," + '.$userid' + "," + '.$roomname' + ")";
    // ,(select id from users where username = ?), ?)';
    // use db.query to insert a message into the db
    db.query(queryString, queryArg, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};


