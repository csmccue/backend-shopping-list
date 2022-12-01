module.exports = async (req, res, next) => {
  try {
    if (!req.user)
      throw new Error('get out of here dude');
    next();
  } catch(error) {
    error.status = 403;
    next(error);
  }
};
