// declear variables
const JWTSecretKey = process.env.JWTSecretKey || "SecretKey";

const authentication = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (!token) return res.status(401).send("authenication token required");
    token = token.split(" ")[1];
    jwt.verify(token, JWTSecretKey, (err, user) => {
      if (err) return res.status(403).send("unauthorized token");
      res.user = user;
      next();
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = authentication;
