const logger = (req, res, next) => {
  const data = {
    url: req.url,
    time: new Date().getFullYear(),
    type: req.method,
  };
  console.log(data);
  next();
};
module.exports = { logger };
