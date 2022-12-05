const authorize = (req, res, next) => {
  console.log(req.body);
  const user = req.body.user;
  if (!user || user.name !== "jhon") {
    res.status(401).send("Unauthorize");
    res.end();
  } else {
    req.user = { ...user, id: 1 };
    next();
  }
};

module.exports = authorize;
