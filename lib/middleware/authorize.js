const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    const item = await Item.getById(req.params.id);
    if (!req.user || req.user.id !== item.user_id)
      throw new Error('get out of here dude');
    next();
  } catch(error) {
    error.status = 403;
    next(error);
  }
};
