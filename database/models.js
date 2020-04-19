var db = require('./index.js');

module.exports = {
  get: function (callback){
        var queryStr = 'SELECT * FROM todos';
        db.query(queryStr, (err, results) => {
            callback(err, results)
        })
    },
  post: function (params, callback) {
      var queryStr = 'INSERT INTO todos (task, completed) VALUES (?, ?)';
      db.query(queryStr, params, (err, results) => {
        callback(err, results);
      })
    },
  update: function (params, callback) {
    var queryStr = 'UPDATE todos SET task = ?, completed = ? WHERE id = ?'
    db.query(queryStr, params, (err, results) => {
      callback(err, results)
    })

  },
  delete: function (params, callback) {
    var queryStr = `DELETE FROM todos WHERE id=${params}`;
    db.query(queryStr, (err, results) => {
        callback(err, results)
    })
  }
}