const models = require("../models");

const browse = (req, res) => {
  models.role
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const role = req.body;

  // TODO validations (length, format...)

  models.role
    .insert(role)
    .then(([result]) => {
      res.location(`/roles/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
