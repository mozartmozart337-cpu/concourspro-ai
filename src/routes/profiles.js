const express = require("express");
const router = express.Router();

let profiles = [
  {
    id: 1,
    nom: "Mozart",
    email: "mozart@example.com",
    concours: "ENSPY"
  }
];

router.get("/", (req, res) => {
  res.json(profiles);
});

router.post("/", (req, res) => {
  const { nom, email, concours } = req.body;

  if (!nom || !email || !concours) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const profile = {
    id: profiles.length + 1,
    nom,
    email,
    concours
  };

  profiles.push(profile);

  res.json({
    message: "Profil créé ✅",
    profile
  });
});

module.exports = router;
