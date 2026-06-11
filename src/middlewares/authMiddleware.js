const jwt = require("jsonwebtoken");

const SECRET = "CONCOURSPRO_SECRET";

module.exports = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ message: "Token requis" });

  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();
  } catch (e) {
    res.status(401).json({ message: "Token invalide" });
  }
};
