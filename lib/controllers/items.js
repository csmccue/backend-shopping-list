const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
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
      // const { user } = req.user.id;
      // const { description } = req.body.description;
      // const { qty } = req.body.qty;
      // console.log('REQ', req.body);
      const newItem = await Item.insert({ description: req.body.description, qty: req.body.qty, user_id: req.user.id });
      res.json(newItem);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', [authenticate, authorize], async (req, res, next) => {
    try {
      console.log('req.body.attrs ', req.body.attrs);
      const updatedItem = await Item.updateById(req.params.id, req.body);
      if (!updatedItem) next();
      res.json(updatedItem);
    } catch (error) {
      next(error);
    }
  })











;
