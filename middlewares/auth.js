const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv/config");
}

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const parts = authHeader.split(" ");
  if (!parts.length === 2)
    return res.status(401).json({ error: "Token invalid" });

  const [schema, token] = parts;
  if (!schema.trim() === "Bearer")
    return res.status(401).json({ error: "Token invalid" });
  console.log(process.env.SECRET);
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token invalid" });
    req.userId = decoded.id;
    return next();
  });
};
