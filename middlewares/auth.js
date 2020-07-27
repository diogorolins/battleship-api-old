const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  console.log(req.method);
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const parts = authHeader.split(" ");
  if (!parts.length === 2)
    return res.status(401).json({ error: "Token invalid" });

  const [schema, token] = parts;
  if (!schema.trim() === "Bearer")
    return res.status(401).json({ error: "Token invalid" });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token invalid" });
    req.userId = decoded.id;
    return next();
  });
};
