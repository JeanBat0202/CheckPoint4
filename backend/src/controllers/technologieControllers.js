const models = require("../models");

const browse = (req, res) => {
  models.technologie
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
  const technologie = req.body;

  // TODO validations (length, format...)

  models.technologie
    .insert(technologie)
    .then(([result]) => {
      res.location(`/technologies/${result.insertId}`).sendStatus(201);
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
