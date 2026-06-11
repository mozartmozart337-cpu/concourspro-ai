const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const store = require("../services/storeService");

const SECRET = "CONCOURSPRO_SECRET";

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const data = store.read();

  if (data.users[email]) {
    return res.status(400).json({ message: "Utilisateur existe déjà" });
  }

  const hash = await bcrypt.hash(password, 10);

  data.users[email] = {
    id: Date.now(),
    name,
    email,
    password: hash
  };

  store.write(data);

  res.json({ message: "Compte créé ✅" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const data = store.read();
  const user = data.users[email];

  if (!user) return res.status(400).json({ message: "Introuvable" });

  const ok = await bcrypt.compare(password, user.password);

  if (!ok) return res.status(400).json({ message: "Mot de passe incorrect" });

  const token = jwt.sign(
    { id: user.id, email },
    SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
};
