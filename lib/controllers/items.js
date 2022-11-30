const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');

module.exports = Router()

// TO DO - implement items CRUD
  .get('/', [authenticate], async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.send(items);
    } catch (error) {
      next(error);
    }
  })

  .post('/', [authenticate], async (req, res, next) => {
    try {
      const newItem = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(newItem);
    } catch (error) {
      next(error);
    }
  })











;
