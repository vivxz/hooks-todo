var model = require('../database/models.js');

module.exports = {
  get: function (req, res) {
    model.get((err, results) => {
      if (err) {
        console.error(err)
      } else {
        res.status(200).json(results)
      }
    })
  },
  post: function (req, res) {
    var task = [req.body.task, false];
    model.post(task, (err, results) => {
      if (err) {
        console.error(err)
      } else {
        res.status(200).send('POSTED')
      }
    })
  },
  update: function (req, res) {
    var params = req.params.id;
    var bool = req.body.completed;
    model.update([bool, params], (err, results) => {
      if (err) {
        console.error(err)
      } else {
        res.status(200).send('UPDATED')
      }
    })
  },
  delete: function (req, res) {
    var params = req.params.id;
    model.delete(params, (err, results) => {
      if (err) {
        console.error(err)
      } else {
        res.status(200).send('DELETED')
      }
    })
  },
}