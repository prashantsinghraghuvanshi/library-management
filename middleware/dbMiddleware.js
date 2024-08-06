const db = require('../db/db');

module.exports = (req, res, next) => {
  req.db = db;
  next();
};