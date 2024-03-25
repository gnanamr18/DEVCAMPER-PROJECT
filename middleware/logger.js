//@desc log the req into console

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol} : //${req.get("host")} ${req.originalUrl}`
  );
  console.log("hi");
  next();
};

module.exports = logger;
